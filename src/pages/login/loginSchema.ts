import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatorio").email("Coloque um email Valido"),
    password: yup.string().required("Senha Obrigatoria"),
  }) 