import { ChangeEvent } from "react"

type InputProps = {
    placeHolder ?: string
    typeIp : string
    className : string
    max: string
    onChange : (event : ChangeEvent<HTMLInputElement>) => void
}

export default InputProps;