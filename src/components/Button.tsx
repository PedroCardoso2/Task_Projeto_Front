import ButtonProps from "./ButtonProps";


export default function Button(props : ButtonProps){
    return <button className={props.css} onClick={props.onClick}>{props.name}</button>;
}