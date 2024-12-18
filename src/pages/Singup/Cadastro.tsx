import styles from "../Singup/Cadastro.module.css";

import { useState, ChangeEvent } from "react";
import Button from "../../components/Button";
import Inputs from "../../components/Inputs";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";

import { useAuth, UserRegisterProps } from "../../context/useAuthContext";

export default function Cadastro() {

    const { register } = useAuth();

    const [registerBody, setRegisterBody] = useState<UserRegisterProps>({} as UserRegisterProps);
    const [password, setPassword] = useState<string>('');
    const [enable, setEnable] = useState<boolean>(true);

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        if (password !== registerBody.password) setEnable(false);

    }


    const sendDate = (date: UserRegisterProps) => register(date);

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
                    <RiUserLine />
                    <Inputs
                        typeIp="text"
                        placeHolder="Username"
                        className={styles.userName}
                        max="200" onChange={(e) => setRegisterBody({ ...registerBody, login: e.target.value })} />
                </div>

                <div className={styles.pass}>
                    <MdOutlineLock />
                    <Inputs typeIp="password"
                        placeHolder="Password"
                        className={styles.passWord}
                        max="200"
                        onChange={e => setRegisterBody({ ...registerBody, password: e.target.value })} />
                </div>

                <div className={styles.pass}>
                    <MdOutlineLock />
                    <Inputs
                        typeIp="password"
                        placeHolder="Confirm Password"
                        className={styles.passWord}
                        max="200"
                        onChange={handlePasswordChange} />
                </div>

                <div className={styles.pass}>
                    <MdOutlineEmail />
                    <Inputs
                        typeIp="text"
                        placeHolder="Email"
                        className={styles.passWord}
                        max="200"
                        onChange={e => setRegisterBody({ ...registerBody, login: e.target.value })} />
                </div>

                <div className={styles.passwordWrong}>
                    {enable ? <p></p> : <p style={{ color: "red" }}>Senha Inválida</p>}
                </div>

                <Button name="Enviar" css={styles.buttonEnviar} onClick={() => sendDate(registerBody)} />
            </div>
        </div>
    );
}