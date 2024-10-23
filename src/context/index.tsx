import React, { createContext, useContext, useState } from "react";
import { api } from "../lib/axios";
import { RouthPath } from "../routes/route-path";

export type UserProps = {
    login: string;
    password: string;
};

export type UserRegisterProps = {
    login: string;
    password: string;
    ROLE: string;
};

export type TaskProps = {
    id: number;
    description: string;
    taskStatus: string;
    dateTask: string;
};

type AuthContextProps = {
    login: (user: UserProps) => Promise<void>;
    register: (userRegister: UserRegisterProps) => Promise<void>;
    fetchTasks: (username: string) => Promise<TaskProps[]>;
    addTask: (task: string, username: string) => Promise<void>;
    deleteTask: (taskId: number) => Promise<void>;
};

// Cria um contexto
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    // Função para login
    const login = async (data: UserProps) => {
        try {
            const response = await api.post("/auth/login", data);
            const accessToken = response.data;

            localStorage.setItem("@taskList:accessToken", accessToken);

            window.location.href = RouthPath.HOME;
        } catch (e) {
            console.log(e);
        }
    };

    // Função para registro
    const register = async (data: UserRegisterProps) => {
        try {
            const response = await api.post("/auth/register", data);
            const accessToken = response.data;

            localStorage.setItem("@taskList:accessToken", accessToken);
            window.location.href = RouthPath.HOME;
        } catch (e) {
            console.log(e);
        }
    };

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
                console.log("Task adicionada com sucesso");
                await fetchTasks(username); // Atualiza as tarefas após adicionar
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
        <AuthContext.Provider value={{ login, register, fetchTasks, addTask, deleteTask }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, useAuth, AuthProvider };
