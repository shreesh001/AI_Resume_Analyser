const resumeModel = require('../Models/resume');
const pdfParse = require('pdf-parse/lib/pdf-parse');
const fs = require('fs');
const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
    token: "CfeyKnJl8ivAODO542S74jngZ93uzSnh18bUu6ob",
});

exports.uploadResume = async (req, res) => {
    try {
        //step 1 — get text data from request
        const { userId, jobDescription } = req.body;

        //step 2 — get file data from multer
        const resumeName = req.file.originalname;
        const resumePath = req.file.path;

        //step 3 — read and parse the pdf
        const pdfData = fs.readFileSync(resumePath);
        const parsedData = await pdfParse(pdfData);
        console.log("PDF Parsed Successfully");

        // step 4 — build the prompt
        const prompt = `
            You are an expert resume screener and career coach.
  
            Your job is to compare the given resume with the job description and evaluate how well the candidate matches the role.

            Resume:
            ${parsedData.text}

            Job Description:
            ${jobDescription}

            Evaluate the resume and respond ONLY in the following JSON format, nothing else, no extra text, no markdown:
            { 
                "score": <number between 0 and 100>,
                "matchedSkills": [<list of skills from resume that match the job>],
                "missingSkills": [<list of important skills from job description missing in resume>],
                "feedback": "<3-4 sentences on how to improve the resume to better match this job>"
            }

            Scoring rules:
            - 80-100 : Strong match, most required skills present
            - 60-79  : Moderate match, some key skills missing
            - 40-59  : Weak match, many important skills missing
            - 0-39   : Poor match, resume not suited for this role
        `;

        //step 5 — call cohere with correct model and format
        const response = await cohere.chat({
            model: 'command-r-plus-08-2024',
            message: prompt,
            temperature: 0.5,
        });

        //step 6 — extract text from response
        let result = response.text;
        console.log("Raw AI Response:", result);

        //step 7 — clean and parse the JSON
        const cleanResult = result.replace(/```json|```/g, '').trim();
        const parsedResult = JSON.parse(cleanResult);
        console.log("Score:", parsedResult.score);
        console.log("Feedback:", parsedResult.feedback);

        //step 8 — save to database with score and feedback
        const newResume = new resumeModel({
            userId,
            jobDescription,
            resumeName,
            resumePath,
            score: parsedResult.score,
            feedback: parsedResult.feedback,
            matchedSkills: parsedResult.matchedSkills,
            missingSkills: parsedResult.missingSkills,
        });

        await newResume.save();

        fs.unlinkSync(resumePath); // delete the uploaded file after processing

        //step 9 — send full response to frontend
        res.status(200).json({
            message: "Resume uploaded successfully",
            resume: newResume,
            analysis: parsedResult,
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({ error: "Server Error", message: err.message });
    }
}

exports.getallResumeforUser = async (req, res) => {
    try {
        const { userId } = req.params;
        let resumes = await resumeModel.find({ userId }).sort({ createdAt: -1 });
        return res.status(200).json({ message: "Resumes fetched successfully", resumes: resumes });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Server Error", message: err.message });
    }
}

exports.getallResumeforAdmin = async (req, res) => {
    try {
        let resumes = await resumeModel.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ message: "Resumes fetched all History successfully", resumes: resumes });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Server Error", message: err.message });
    }
}

