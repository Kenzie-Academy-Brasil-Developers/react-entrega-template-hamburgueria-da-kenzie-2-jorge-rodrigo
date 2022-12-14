import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import * as yup from 'yup';
import Form from "../../components/Form"
import { DivFormSectionStyled,  MainDivRegister } from "./style"
import Input from "../../components/Input"
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"

export interface iUserForm{
    name:string,
    email:string,
    password:string,
    passwordValidate:string
 }

const RegisterPage = () => {
  
  const { register : registerFunc } = useContext(UserContext)

    const registerSchema = yup.object().shape({
        name:yup.string().required("Nome Obrigatorio"),
        email: yup.string().required("Email Obrigatorio").email("Coloque um email Valido"),
        password: yup.string().required("Senha Obrigatoria"),
        passwordValidate: yup.string().oneOf([yup.ref('password'),null], 'Senha precisa ser igual').required("Confirmação de senha Obrigatoria")
      }) 
      const { register,handleSubmit,formState: { errors }, reset } = useForm<iUserForm>({
        resolver: yupResolver(registerSchema)
      })
    
       
      const onHandleSubmit: SubmitHandler<iUserForm> = (data) => {
        const body = {
            name: data.name,
            email:data.email,
            password: data.password
        }
        registerFunc(body)
        reset()
      }
  
    return (
        <MainDivRegister>
          <Header />
          <DivFormSectionStyled>
            <Form sub={handleSubmit(onHandleSubmit)}>
              <div>
                 <h2>Cadastro</h2>
                  <Link to='/'>Retornar para o login</Link>
              </div>
              <Input label={"Nome"} type={"text"} placeholder={"Digite seu Nome"} id={"name"} register={register("name")}/>
              {errors.name? <span>{errors.name.message}</span>: <></>}

              <Input label={"Email"} type={"email"} placeholder={"Digite seu email"} id={"email"} register={register("email")}/>
              {errors.email? <span>{errors.email.message}</span>: <></>}

              <Input label={"Senha"} type={"password"} placeholder={"Digite sua senha"} id={"password"} register={register("password")}/>
              {errors.password? <span>{errors.password.message}</span>: <></>}

              <Input label={"Confirmação de senha"} type={"password"} placeholder={"Digite sua senha novamente"} id={"passwordValidate"} register={register("passwordValidate")}/>
              {errors.passwordValidate? <span>{errors.passwordValidate.message}</span>: <></>}
              <Button color="green">Cadastrar</Button>
            </Form>
          </DivFormSectionStyled>
        </MainDivRegister>
    )
}

export default RegisterPage