import styles from "./Login.module.css"

import { ChangeEvent, useState } from "react";
import axios from 'axios';
import Button from "../components/Button";
import Inputs from "../components/Inputs";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function Login(){

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const navigate = useNavigate();
   

    const handleUserNameChange = (event : ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value); 
    }

    const handlePasswordChange = (event : ChangeEvent<HTMLInputElement>) => {
        setPassWord(event.target.value);
    }

    const handleButtonClick = async () => {
        console.log("Username: " + userName);
        console.log("Password: " + passWord);
        
        

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                login: userName,
                password: passWord
            });

            const token : string = response.data;

            localStorage.setItem('token', token);
            navigate('/');

        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <div className={styles.imageWrapper}>
                    <img src={('../../public/Ellipse 2.svg')} alt="" width={50}/>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={('../../public/Rectangle 16.svg')} alt="" width={65}/>
                </div>
            </div>
            
            <div className={styles.points}>
                <div className={styles.user}>
                <MdOutlineEmail />
                    <Inputs typeIp="text" placeHolder="Email" className={styles.userName} max="200" onChange={handleUserNameChange} />
                </div>
            
                <div className={styles.pass}>
                <MdOutlineLock />
                    <Inputs typeIp="password" placeHolder="Password" className={styles.passWord} max="200" onChange={handlePasswordChange} />
                </div>

                <Button name="Enviar" css={styles.buttonEnviar} onClick={handleButtonClick}/>
            </div>
        </div>
    ); 
}



