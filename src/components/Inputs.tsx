import InputProps from "./InputsProps"

export default function Inputs(props : InputProps){
    return <input onChange={props.onChange} type={props.typeIp} placeholder={props.placeHolder} min={props.max} className={props.className} max=""/>
}