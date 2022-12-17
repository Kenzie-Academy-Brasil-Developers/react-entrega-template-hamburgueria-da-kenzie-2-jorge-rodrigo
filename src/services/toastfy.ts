import { toast } from "react-toastify";

 
export const notifySucess = (message : string) => {
    toast.success(`${message}`, {
        position: "top-left",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}


export const notifyError = (message : string) => {
    let msg 
    if(message === "Incorrect password"){
        msg = "Senha Incorreta"
    }
    if(message === "Cannot find user"){
        msg = "Usuario não Encontrado"
    }
    if(message === "Email format is invalid"){
        msg = "Formato de Email Invalido"
    }
    if(message === "Email already exists"){
        msg = "Email ja esta cadastrado"
    }
    if(message === "Password is too short"){
        msg = "Senha muito pequena"
    }
    toast.error(`${msg}`, {
        position: "top-left",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
}