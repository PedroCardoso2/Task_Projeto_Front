import { createContext, useContext, useState } from "react";
import { TaskProps } from "./useAuthContext";
import { api } from "../lib/axios";

type fetchProps = {
    fetchTasks: (username: string) => Promise<TaskProps[]>;
    addTask: (task: string, username: string) => Promise<void>;
    deleteTask: (taskId: number) => Promise<void>;
}

const fetchContext = createContext<fetchProps>({} as fetchProps);


const FetchProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    
    // Função para buscar as tarefas de um usuário
    const fetchTasks = async (username: string) => {
        try {
            const response = await api.get(`/taks/${username}`);
            const fetchedTasks = response.data;
            setTasks(fetchedTasks);
            return fetchedTasks; 
        } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
            throw error;
        }
    };

    // Função para adicionar uma nova tarefa
    const addTask = async (taskDescription: string, username: string) => {
        try {
            const taskData = {
                email: username,
                desctask: taskDescription,
            };
            const response = await api.post("/taks/add", taskData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 200) {
                await fetchTasks(username); 
            }
        } catch (error) {
            console.error("Erro ao adicionar tarefa:", error);
        }
    };

    // Função para deletar uma tarefa
    const deleteTask = async (taskId: number) => {
        try {
            const response = await api.delete(`/tasks/${taskId}`);
            if (response.status === 200) {
                console.log("Task deletada com sucesso");
                setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
            }
        } catch (error) {
            console.error("Erro ao deletar tarefa:", error);
        }
    };


    return (
        <fetchContext.Provider value={{ fetchTasks, addTask, deleteTask }} >
            {children}
        </fetchContext.Provider>
    );
}

const useFetch = () => useContext(fetchContext);

export { FetchProvider, useFetch };