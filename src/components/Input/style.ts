import styled from "styled-components";

export const InputFieldStyled = styled.fieldset`
 
   border: none;
   padding: 12px 0;

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

   label{
        font-size: 12px;
   }
`