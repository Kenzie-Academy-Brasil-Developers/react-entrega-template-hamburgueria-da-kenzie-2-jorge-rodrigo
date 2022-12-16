import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Form from "../../components/Form"
import { DivFormSectionStyled,  MainDivRegister } from "./style"
import Input from "../../components/Input"
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"
import { registerSchema } from "./registerSchema"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../assets/loading 2.gif"

export interface iUserForm{
    name:string,
    email:string,
    password:string,
    passwordValidate:string
 }

const RegisterPage = () => {
  
  const { register : registerFunc,loading } = useContext(UserContext)

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
       <>
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
              {!loading && <Button color="green">Cadastrar</Button>}
              {loading && <Button color="green" disable={true}><img src={Loading} alt="loading"/></Button>}
            </Form>
          </DivFormSectionStyled>
        </MainDivRegister>
        <ToastContainer />
       </>
    )
}

export default RegisterPage