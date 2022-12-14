import styled from "styled-components";


export const MainDivRegister = styled.div`
  max-width: 1000px;
   width: 100%;
   @media(min-width: 700px){
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 100px;
   }
`

export const DivFormSectionStyled = styled.div`
     @media(min-width: 700px){
      width: 50%;
     }
`
export const InputFieldRegisterStyled = styled.fieldset`
 
   border: none;
   padding: 12px 0;
   display: flex;
   flex-direction: column;

   input{
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: 2px solid var(--color-black);
    color: var(--color-black);
    padding: 0 6px;
    ::placeholder{
        color: var(--color-grey-2);
    }
   }
   span{
      margin-top: 8px;
      color: var(--color-error);
   }

   label{
        font-size: 12px;
        margin-top: 20px;
   }
`
