import { NavigateFunction } from "react-router-dom";

export interface iUserContextProps{
    children: React.ReactNode;
}

export interface iUserContext{
    login: (dataItem: iLogin) => void;
    register: (dataItem: iRegister) => void;
    user: iUser | null;
    loading: boolean,
    exit: () => void,
    loadingPage: boolean,
    navigate: NavigateFunction
}

export interface iLogin{
    email:string,
    password: string
}

export interface iRegister{
    name:string
    email:string,
    password: string
}

export interface iUser{
    email: string,
	name: string,
	id: number
}

export interface iUserGet{
    email: string,
	name: string,
	id: number,
    password:string
}

export interface iUserResponse{
    accessToken: string,
    user: iUser
}
