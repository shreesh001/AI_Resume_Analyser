import React from 'react'
import styles from './Sidebar.module.css'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/RestorePage';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebaricon}>
          <DocumentScannerIcon sx={{fontSize:54,marginBottom:2}}/>
            <div className={styles.sidebaricontext}>
                Resume Analyser
            </div>
        </div>

        {/* This is sidebar options */}
        <div className={styles.sidebarOptions}>
          <div className={styles.sidebarOption}>
            <DashboardIcon sx={{fontSize:30,marginRight:2}}/> 
            <div className={styles.sidebarOptionName}>DashBoard</div>
          </div>

          <div className={styles.sidebarOption}>
            <HistoryIcon sx={{fontSize:30,marginRight:2}}/> 
            <div className={styles.sidebarOptionName}>History</div>
          </div>

          <div className={styles.sidebarOption}>
            <AdminPanelSettingsIcon sx={{fontSize:30,marginRight:2}}/> 
            <div className={styles.sidebarOptionName}>Admin Panel</div>
          </div>

          <div className={styles.sidebarOption}>
            <LogoutIcon sx={{fontSize:30,marginRight:2}}/> 
            <div className={styles.sidebarOptionName}>Logout</div>
          </div>

        </div>
    </div>
  )
}

export default Sidebar
