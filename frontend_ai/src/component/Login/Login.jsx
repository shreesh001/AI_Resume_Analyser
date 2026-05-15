import React, { useState } from "react";
import styles from "./Login.module.css";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { constant } from "firebase/firestore/pipelines";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUserInfo } = useContext(AuthContext);
  const handlelogin=async()=>{
    try{
        const resut = await signInWithPopup(auth, provider);
        const user = resut.user;

        const userData={
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        }

        // Store user info in localStorage
        localStorage.setItem("islogin", true);
        localStorage.setItem("userInfo", JSON.stringify(userData));  
        setIsAuthenticated(true);
        setUserInfo(userData);

        navigate('/dashboard');
    }
    catch(err){
        alert("Login failed. Please try again.");
        console.log(err);
    }
    
  }
  return (
    <div className={styles.Login}>
        <div className={styles.loginCard}>
            <div className={styles.loginCardTitle}>
                <h1>Login</h1>
                <VpnKeyIcon/>
            </div>

            <div className={styles.googlebtn} onClick={handlelogin}>
                <GoogleIcon sx={{fontSize: "20px", color:"red"}}/> Sign in with Google
            </div>
        </div>
    </div>
  )
}

export default Login

