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

