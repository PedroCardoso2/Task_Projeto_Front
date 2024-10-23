import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { ImBin2 } from "react-icons/im";
import { SlList } from "react-icons/sl";
import { FcAbout, FcContacts, FcHome } from "react-icons/fc";

import { Taks } from "../Task";

import { TaskProps, useAuth } from "../../context";

export default function Home() {
  const { fetchTasks, addTask } = useAuth();
  
  const [tasks, setTasks] = useState<Taks[]>([]);
  const [stade, setStade] = useState<Taks[]>([]);
  const [estado, setEstado] = useState<boolean>(true);
  const [pesquisa, setPesquisa] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const emailUser = "Lukas"; // Substitua pelo nome do usuário desejado

  // Implementação da função fetchAndSetTasks dentro do componente
  const fetchAndSetTasks = async () => {
    try {
      const response: TaskProps[] = await fetchTasks(emailUser);
      const tasks: Taks[] = response.map(tk => ({
        task: tk.description,
        checkboxTask: tk.taskStatus === "PENDENTE" ? false : true // Ajuste para refletir o status
      }));

      setTasks(tasks);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
    fetchAndSetTasks(); // Carrega as tarefas ao iniciar o componente
  }, [emailUser]);

  // Função de adicionar tarefa
  async function addTasks(user: string) {
    const valueInput = document.querySelector<HTMLInputElement>("#inputPesq");

    if (valueInput && valueInput.value.trim() !== "") {
      await addTask(valueInput.value, user); // Adiciona a tarefa
      valueInput.value = ""; // Limpa o campo após adicionar
      await fetchAndSetTasks(); // Atualiza a lista de tarefas após a adição
    }
  }

  function delTask(text: string) {
    const newTask: Taks[] = tasks.filter((nameTask) => nameTask.task !== text);
    setTasks(newTask);
  }

  function toggleStatusTask(index: number) {
    const updateTask = tasks.map((task, i) =>
      i === index ? { ...task, checkboxTask: !task.checkboxTask } : task
    );
    setTasks(updateTask);
  }

  function searchTask() {
    const valueInput = document.querySelector<HTMLInputElement>("#inputPesq");

    if (valueInput?.value.trim() !== "") {
      const filteredTasks = tasks.filter(
        (task) => task.task === valueInput?.value
      );
      setStade(filteredTasks);
      setEstado(false);
    } else {
      setEstado(true);
    }
  }

  return (
    <div className={styles.navBarPrincipal}>
      <div className={styles.navBar}>
        <div className={styles.conteinerImg}>
          <div className={styles.imageWrapper}>
            <img src={"../../public/EllipseBlack.svg"} alt="" width={40} />
          </div>
          <div className={styles.imageWrapper}>
            <img src={"../../public/RectangleBlack.svg"} alt="" width={55} />
          </div>
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
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                  marginTop: "5px",
                }}
                onClick={() => addTasks(emailUser)}
              >
                <IoIosAddCircle />
              </button>

              <input
                type="text"
                id="inputPesq"
                className={styles.inputPes}
                placeholder="Pesquise pela Task ou Adicione 👀 ..... "
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
              />

              <button
                style={{ background: "none", border: "none", cursor: "pointer" }}
                onClick={searchTask}
              >
                <img
                  src={"../../public/pesquisar.svg"}
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
        {estado
          ? tasks.map((task, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                {task.task}
                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  checked={task.checkboxTask}
                  onChange={() => toggleStatusTask(index)}
                />
                <button
                  style={{
                    background: "none",
                    marginLeft: "8px",
                    border: "none",
                    display: "flex",
                    cursor: "pointer",
                  }}
                  onClick={() => delTask(task.task)}
                >
                  <ImBin2 style={{ width: "10px" }} />
                </button>
              </div>
            ))
          : stade.map((task, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                {task.task}
                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  checked={task.checkboxTask}
                  onChange={() => toggleStatusTask(index)}
                />
                <button
                  style={{
                    background: "none",
                    marginLeft: "8px",
                    border: "none",
                    display: "flex",
                    cursor: "pointer",
                  }}
                  onClick={() => delTask(task.task)}
                >
                  <ImBin2 style={{ width: "10px" }} />
                </button>
              </div>
            ))}
      </div>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.sidebarToggle} onClick={() => setIsOpen(!isOpen)}>
          <SlList />
        </button>
        <h2>Menu Principal</h2>
        <ul>
          <li>
            Home <FcHome />
          </li>
          <li>
            About <FcAbout />
          </li>
          <li>
            Contact <FcContacts />
          </li>
        </ul>
      </div>
    </div>
  );
}
