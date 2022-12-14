import { InputFieldStyled, MainDiv, } from "./style"
import Form from "../../components/Form"
import Button from "../../components/Button"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Input from "../../components/Input"

export interface iUserForm{
   email:string,
   password:string
}

const LoginPage = () => {

  const { login } = useContext(UserContext)

  const loginSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatorio").email("Coloque um email Valido"),
    password: yup.string().required("Senha Obrigatoria"),
  }) 
  const { register,handleSubmit,formState: { errors }, reset } = useForm<iUserForm>({
    resolver: yupResolver(loginSchema)
  })

   
  const onHandleSubmit: SubmitHandler<iUserForm> = (data) => {
      login(data)
      reset()
  }

   
    return (
        <MainDiv>
         <Header />
          <div>
            <Form sub={handleSubmit(onHandleSubmit)}>
              <h2>Login</h2>
              <InputFieldStyled>
              <Input label={"Email"} type={"email"} placeholder={"Digite seu email"} id={"email"} register={register("email")}/>
              {errors.email? <span>{errors.email.message}</span>: <></>}

              <Input label={"Senha"} type={"password"} placeholder={"Digite sua senha"} id={"password"} register={register("password")}/>
              {errors.password? <span>{errors.password.message}</span>: <></>}

              </InputFieldStyled>
              <Button color="green">Logar</Button>
              <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
              <Link to={"/register"}>Cadastrar</Link>
            </Form>
          </div>
        </MainDiv>
    )
}

export default LoginPage
