"use client"
import styles from "@/app/Pages/Cad/Cadastro.module.css";
import Image from "next/image";
import Inputs from "@/Components/Inputs/Inputs";
import Button from "@/Components/Button/Button";
import { useState, ChangeEvent } from "react";
import axios from 'axios';

export default function Cadastro() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassWord(event.target.value);
    }

    const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleButtonClick = async () => {
        console.log("Username: " + userName);
        console.log("Password: " + passWord);
        console.log("NewPassword: " + newPassword);
        console.log("Email: " + email);

        
        try {
            const response = await axios.post('http://localhost:8080/auth/register', {
                login: userName,
                password: passWord,
                role: "USER"
            });

            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <div className={styles.imageWrapper}>
                    <Image src={require('@/../../public/img/Ellipse 2.svg')} alt="" width={50} />
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={require('@/../../public/img/Rectangle 16.svg')} alt="" width={65} />
                </div>
            </div>

            <div className={styles.points}>
                <div className={styles.pass}>
                    <Image src={require('@/../../public/img/LC/user.svg')} alt="" width={16} />
                    <Inputs typeIp="text" placeHolder="Username" className={styles.userName} max="200" onChange={handleUserNameChange} />
                </div>

                <div className={styles.pass}>
                    <Image src={require('@/../../public/img/LC/lock.svg')} alt="" width={16} />
                    <Inputs typeIp="password" placeHolder="Password" className={styles.passWord} max="200" onChange={handlePasswordChange} />
                </div>

                <div className={styles.pass}>
                    <Image src={require('@/../../public/img/LC/lock.svg')} alt="" width={16} />
                    <Inputs typeIp="password" placeHolder="Confirm Password" className={styles.passWord} max="200" onChange={handleNewPasswordChange} />
                </div>

                <div className={styles.pass}>
                    <Image src={require('@/../../public/img/LC/email.svg')} alt="" width={16} />
                    <Inputs typeIp="text" placeHolder="Email" className={styles.passWord} max="200" onChange={handleEmailChange} />
                </div>

                <Button name="Enviar" css={styles.buttonEnviar} onClick={handleButtonClick} />
            </div>
        </div>
    );
}
