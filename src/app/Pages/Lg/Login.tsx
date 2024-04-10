"use client"

import Image from "next/image";
import styles from "./Login.module.css"
import Button from "@/Components/Button/Button";
import Inputs from "@/Components/Inputs/Inputs";
import { ChangeEvent, useState } from "react";

export default function Login(){

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const handleUserNameChange = (event : ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value); 
    }

    const handlePasswordChange = (event : ChangeEvent<HTMLInputElement>) => {
        setPassWord(event.target.value);
    }

    const handleButtonClick = () => {
        console.log("Username: " + userName);
        console.log("Password: " + passWord);
    }

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <div className={styles.imageWrapper}>
                    <Image src={require('@/../../public/img/Ellipse 2.svg')} alt="" width={50}/>
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={require('@/../../public/img/Rectangle 16.svg')} alt="" width={65}/>
                </div>
            </div>

            <div className={styles.points}>
                <div className={styles.user}>
                    <Image src={require('@/../../public/img/LC/user.svg')} alt="" width={16}/>
                    <Inputs typeIp="text" placeHolder="Username" className={styles.userName} max="200" onChange={handleUserNameChange} />
                </div>
            
                <div className={styles.pass}>
                    <Image src={require('@/../../public/img/LC/lock.svg')} alt="" width={16} />
                    <Inputs typeIp="password" placeHolder="Password" className={styles.passWord} max="200" onChange={handlePasswordChange} />
                </div>

                <Button name="Enviar" css={styles.buttonEnviar} onClick={handleButtonClick}/>
            </div>
        </div>
    ); 
}
