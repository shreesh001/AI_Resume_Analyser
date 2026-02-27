import React from 'react'
import styles from './Dashboard.module.css'
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardLeft}>
        <div className={styles.smartResumeScreening}>Smart Resume Screening</div>
        <div className={styles.resumeMatchScore}>Resume Match Score</div>
      </div>
    </div>
  )
}

export default Dashboard
