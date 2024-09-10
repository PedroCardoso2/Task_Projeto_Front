"use client";
import styles from "@/app/Pages/Home/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import { Taks } from "./Task";



export default function HomePrinc() {
    const [tasks, setTasks] = useState<Taks[]>([]);
    

    function addTask(){
        let valueInput = document.querySelector<HTMLInputElement>("#inputPesq");
        
        if(valueInput != undefined && valueInput.value.trim() !== "" ){
            setTasks([...tasks, {
                task:  valueInput.value,
                checkboxTask: false
            }]);

            valueInput.value = "";
        }
    }

    function toggleStatusTask(index : number){
        const updateTask = tasks.map((task, i) => 
            i === index ? {...task, checkboxTask : !task.checkboxTask} : task
        );
        
        setTasks(updateTask);
    }

    function seachTask(textTask:string){
        if(textTask != null && textTask !== ""){
            const valuesTask = tasks.map(
                task => {
                   task.task === textTask ? {task : task.task, checkboxTask : task.task} : task
                }
            )
        }else{
            return tasks;
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
                                style={{ background: "none", border: "none", cursor:"pointer" }}
                                onClick={() => addTask()}
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
                                style={{ background: "none", border: "none", cursor:"pointer" }}
                                onClick={() => seachTask}
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

                </div>
            </div>
            <div className={styles.tasklist}>
            {tasks.map((task, index) => (
                <div key={index}>
                   - {task.task}
                            <input
                              className={styles.customCheckbox}
                                type="checkbox"
                                checked={task.checkboxTask}
                                onChange={() => toggleStatusTask(index)}
                            />
                </div>       
                            
                
                    ))}
            </div>
        </div>
    );
}
