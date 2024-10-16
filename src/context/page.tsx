import { useAuth } from "."

export default function Pages(){
    const { login, register } = useAuth();

    console.log(user);

    

    return (<>
        <h1>Olá</h1>

        <h2>{user?.name}</h2>

        <button onClick={logout}>Click</button>
     </>)
}