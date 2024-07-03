"use client";
import styles from "@/app/Pages/Home/Home.module.css";
import Image from "next/image";
import { useState } from "react";

interface Task {
    text: string;
    checked: boolean;
}

export default function HomePrinc() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    const addTask = (): void => {
        const valueInput = document.querySelector<HTMLInputElement>("#inputPesq");
        if (valueInput && valueInput.value.trim() !== "") {
            setTasks([...tasks, { text: valueInput.value, checked: false }]);
            valueInput.value = "";
        }
    };

    const searchTask = (): void => {
        const valueInput = document.querySelector<HTMLInputElement>("#inputPesq");
        if (valueInput) {
            setSearchText(valueInput.value);
        }
    };

    const toggleCheckbox = (index: number): void => {
        const newTasks = tasks.map((task, i) => 
            i === index ? { ...task, checked: !task.checked } : task
        );
        setTasks(newTasks);
    };

    const filteredTasks = tasks.filter(task => 
        task.text.toLowerCase().includes(searchText.toLowerCase())
    );

    const sortedTasks = [...filteredTasks];
    if (searchText) {
        const index = sortedTasks.findIndex(task => task.text.toLowerCase() === searchText.toLowerCase());
        if (index > -1) {
            const [task] = sortedTasks.splice(index, 1);
            sortedTasks.unshift(task);
        }
    }

    return (
        <div className={styles.navBarPrincipal}>
            <div className={styles.navBar}>
                <div className={styles.conteinerImg}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={require("@/../../public/img/EllipseBlack.svg")}
                            alt=""
                            width={40}
                        />
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={require("@/../../public/img/RectangleBlack.svg")}
                            alt=""
                            width={55}
                        />
                    </div>
                </div>
                <div className={styles.textNavbar}>
                    <a href="">
                        <h3 id={styles.homeText} className={styles.textList}>
                            Home
                        </h3>
                    </a>
                    <a href="">
                        <h3 id={styles.checkList} className={styles.textList}>
                            CheckList
                        </h3>
                    </a>
                </div>
            </div>

            <div className={styles.conteiner}>
                <div className={styles.conteinerOne}>
                    <div className={styles.taskPage}>
                        <h1 className={styles.textTaskListHome}>Task List</h1>
                    </div>

                    <div className={styles.conteinerHomeTask}>
                        <div className={styles.pesq}>
                            <button 
                                style={{ background: "none", border: "none" }}
                                onClick={addTask}
                            >
                                <Image
                                    src={require("@/../../public/img/adicionar.svg")}
                                    alt=""
                                    width={18}
                                    id={styles.adicionarImg}
                                />
                            </button>
                            <input
                                type="text"
                                id="inputPesq"
                                className={styles.inputPes}
                                placeholder="Pesquise pela Task ou Adicione 👀 ....."
                            />
                            <button 
                                style={{ background: "none", border: "none" }}
                                onClick={searchTask}
                            >
                                <Image
                                    src={require("@/../../public/img/pesquisar.svg")}
                                    alt=""
                                    width={18}
                                    id={styles.pesqImg}
                                />
                            </button>
                        </div>
                    </div>

                    <div className={styles.taskList}>
                        {sortedTasks.map((task, index) => (
                            <div key={index} className={styles.taskItem}>
                                <input 
                                    type="checkbox" 
                                    checked={task.checked}
                                    onChange={() => toggleCheckbox(index)}
                                />
                                <span>{task.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
