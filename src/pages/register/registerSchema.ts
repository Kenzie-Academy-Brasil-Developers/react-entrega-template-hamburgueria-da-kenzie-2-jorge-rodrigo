import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name:yup.string().required("Nome Obrigatorio"),
    email: yup.string().required("Email Obrigatorio").email("Coloque um email Valido"),
    password: yup.string().required("Senha Obrigatoria").min(6, "Senha precisa ter 6 digitos"),
    passwordValidate: yup.string().oneOf([yup.ref('password'),null], 'Senha precisa ser igual').required("Confirmação de senha Obrigatoria")
}) 