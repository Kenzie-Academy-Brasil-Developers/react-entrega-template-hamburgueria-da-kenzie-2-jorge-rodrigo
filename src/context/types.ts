export interface iUserContextProps{
    children: React.ReactNode;
}

export interface iUserContext{
    login: (dataItem: iLogin) => void;
    register: (dataItem: iRegister) => void
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

export interface iUserResponse{
    accessToken: string,
    user: iUser
}
