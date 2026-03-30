import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import ArticleIcon from "@mui/icons-material/Article";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const Dashboard = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [file, setFile] = useState(null);

  console.log("File:", file);
  const handleAnalyze = () => {
    if (!file || !jobDescription.trim()) {
      alert("Upload resume and paste job description.");
      return;
    }

    console.log("Analyzing...");
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <h1 className={styles.title}>Smart Resume Screening</h1>
        <h2 className={styles.score}>Resume Match Score</h2>

        {/* Instructions */}
        <div className={styles.instructions}>
          <div className={styles.instructionsTitle}>
            <NotificationImportantIcon className={styles.iconWarning} />
            Important Instructions :
          </div>

          <div className={styles.instructionItem}>
            <ArticleIcon className={styles.iconLight} />
            Paste complete job description for accurate analysis.
          </div>

          <div className={styles.instructionItem}>
            <AttachFileIcon className={styles.iconLight} />
            Upload resume only in PDF format.
          </div>
        </div>

        {/* Upload Section */}
        <div className={styles.section}>
          <p className={styles.sectionText}>
            Upload resume and job description for detailed analysis:
          </p>

          <label className={styles.buttonPrimary}>
            <div>{file ? file.name : "Upload PDF"}</div>
            <input
              type="file"
              accept="application/pdf"
              hidden
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </label>
        </div>

        {/* Job Description */}
        <div className={styles.section}>
          <textarea
            className={styles.textarea}
            placeholder="Paste job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        <button className={styles.buttonPrimary} onClick={handleAnalyze}>
          Analyze
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.analysisPlaceholder}>
          <div className={styles.analysisText}>Analyze with AI</div>
          <img className={styles.profileImg} src="https://i.pinimg.com/736x/0b/43/42/0b4342451e511f651d461edb1c3a7df9.jpg" alt="" />
          <h2>I_am_Caption</h2>
        </div>


        <div className={styles.analysisPlaceholder}>
          <div className={styles.analysisText}>Result</div>
          <div className={styles.resultScore}>
            73%
            <CreditScoreIcon className={styles.resultIcon} />
          </div>
          
          <div className={styles.resultText}>
            <h2>Feedback :</h2>
            <p className={styles.feedback}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nam dolorem error dignissimos sunt atque, at earum officiis beatae sit velit perspiciatis itaque dolor aliquid molestias qui totam, laudantium vitae iusto accusantium eveniet eum quo! Distinctio dolorum iste impedit, asperiores atque dolore placeat a illo voluptas sapiente, repellendus porro qui dicta! Veniam odio repellat doloremque optio, natus modi voluptatibus necessitatibus animi vitae sint. Pariatur enim sequi dignissimos fugit totam nisi culpa, laboriosam ipsa eligendi corrupti.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;