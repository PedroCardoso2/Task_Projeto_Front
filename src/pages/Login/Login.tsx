import styles from "./Login.module.css"

import {  useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { useAuth, UserProps } from "../../context";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";



export default function Login(){
    const { login } = useAuth();
   
    const [loginBody , setLoginBody] = useState<UserProps>({} as UserProps);
    
    const sendDate = (data: UserProps) => login(data);

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
                    <Inputs 
                    typeIp="text" 
                    placeHolder="Email" 
                    className={styles.userName} 
                    max="200" 
                    onChange={e => setLoginBody({...loginBody, login: e.target.value})} />
                </div>
            
                <div className={styles.pass}>
                <MdOutlineLock />
                    <Inputs typeIp="password" 

                    placeHolder="Password" 

                    className={styles.passWord} 

                    max="200" 

                    onChange={e => setLoginBody({...loginBody, password: e.target.value})} />
                </div>

                <Button name="Enviar" css={styles.buttonEnviar} onClick={() => sendDate(loginBody)}/>
            </div>
        </div>
    ); 
}



