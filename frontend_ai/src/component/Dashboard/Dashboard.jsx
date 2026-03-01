import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import ArticleIcon from "@mui/icons-material/Article";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const Dashboard = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleAnalyze = () => {
    if (!file || !jobDescription.trim()) {
      alert("Upload resume and paste job description.");
      return;
    }

    console.log("Analyzing...");
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.card}>
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
            Upload resume and job description for detailed analysis
          </p>

          <label className={styles.buttonPrimary}>
            Upload PDF
            <input
              type="file"
              accept="application/pdf"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
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
    </div>
  );
};

export default Dashboard;