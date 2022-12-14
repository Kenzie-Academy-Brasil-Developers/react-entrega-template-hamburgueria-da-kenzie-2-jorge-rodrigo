import styled from "styled-components";


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
