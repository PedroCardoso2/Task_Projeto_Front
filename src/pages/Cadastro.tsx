import styles from "../pages/Cadastro.module.css";

import { useState, ChangeEvent } from "react";
import axios from 'axios';
import Button from "../components/Button";
import Inputs from "../components/Inputs";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const [userName, setUserName] = useState<string>('');
    const [passWord, setPassWord] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [enable, setEnable] = useState<boolean>(true)
    const navigate = useNavigate();
    
    console.log(email)

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
        setEmail(event.target.value)
    }



    const handleButtonClick = async () => {

        if (newPassword !== passWord) {
            setEnable(false)
        } else {

            try {
                const response = await axios.post('http://localhost:8080/auth/register', {
                    login: userName,
                    password: passWord,
                    role: "USER"
                });

                const token = response.data;

                localStorage.setItem('token', token);
                
                navigate('/');
                
            } catch (error) {
                console.error('Error during registration:', error);
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <div className={styles.imageWrapper}>
                
                    <img src={('../../public/Ellipse 2.svg')} alt="" width={50} />
                </div>
                <div className={styles.imageWrapper}>
                    <img src={('../../public/Rectangle 16.svg')} alt="" width={65} />
                </div>
            </div>

            <div className={styles.points}>
                <div className={styles.pass}>
                <RiUserLine/>
                    <Inputs typeIp="text" placeHolder="Username" className={styles.userName} max="200" onChange={handleUserNameChange} />
                </div>

                <div className={styles.pass}>
                    <MdOutlineLock/>
                    <Inputs typeIp="password" placeHolder="Password" className={styles.passWord} max="200" onChange={handlePasswordChange} />
                </div>

                <div className={styles.pass}>
                <MdOutlineLock/>
                    <Inputs typeIp="password" placeHolder="Confirm Password" className={styles.passWord} max="200" onChange={handleNewPasswordChange} />
                </div>

                <div className={styles.pass}>
                <MdOutlineEmail />
                    <Inputs typeIp="text" placeHolder="Email" className={styles.passWord} max="200" onChange={handleEmailChange} />
                </div>

                <div className={styles.passwordWrong}>
                    {enable ? <p></p> : <p style={{ color: "red" }}>Senha Inválida</p>}
                </div>

                <Button name="Enviar" css={styles.buttonEnviar} onClick={handleButtonClick} />
            </div>
        </div>
    );
}