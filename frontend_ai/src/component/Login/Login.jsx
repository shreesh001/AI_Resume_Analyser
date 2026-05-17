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
import axios from "../../utils/axios";

const Login = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated, setUserInfo } = useContext(AuthContext);
    const handlelogin = async () => {
        try {
            const resut = await signInWithPopup(auth, provider);
            const user = resut.user;

            const userData = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }

            await axios.post('/api/user', userData).then((response) => {
                setUserInfo(response.data.user);
                setIsAuthenticated(true);

                // Store user info in localStorage
                localStorage.setItem("userInfo", JSON.stringify(response.data.user));
                localStorage.setItem("islogin", true);
                console.log(response.data);
            })
                .catch(err => {
                    console.log(err);
                    alert("Login failed. Please try again.");
                })

            navigate('/dashboard');
        }
        catch (err) {
            alert("Login failed. Please try again.");
            console.log(err);
        }

    }
    return (
        <div className={styles.Login}>
            <div className={styles.loginCard}>
                <div className={styles.loginCardTitle}>
                    <h1>Login</h1>
                    <VpnKeyIcon />
                </div>

                <div className={styles.googlebtn} onClick={handlelogin}>
                    <GoogleIcon sx={{ fontSize: "20px", color: "red" }} /> Sign in with Google
                </div>
            </div>
        </div>
    )
}

export default Login

