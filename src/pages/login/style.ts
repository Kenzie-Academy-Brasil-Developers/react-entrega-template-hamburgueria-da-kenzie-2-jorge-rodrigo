import styled from "styled-components";


export const MainDiv = styled.div`
  max-width: 1000px;
  
   @media(min-width: 700px){
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      margin-top: 100px;
      div:first-child{
         margin-top: 70px;
      }
   }
`

export const InfoDivStyled = styled.div`

   margin: 12px auto;
   padding: 15px 6px;

   border: 1px solid var(--color-grey-1);
   border-radius: 8px;

   width: 90%;

   display: flex;
   justify-content: space-around;

   img{
      height: 28px;
      width: 35px;
      margin-top: 5px;
      background-color: var(--color-bg);
      padding: 0 5px;
      border-radius: 8px;
   }
  

   p{
    font-size: 12px;
    width: 60%;
    height: 20%;
    color: var(--color-grey-2);

    span{
        color: var(--color-black);
       font-weight: 600;
    }
   }
`

export const InputFieldStyled = styled.fieldset`
 
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
