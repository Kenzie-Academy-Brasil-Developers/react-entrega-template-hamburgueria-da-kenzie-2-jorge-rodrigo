import styled from "styled-components";



export const ModalContainer = styled.div`
   position: absolute;
   height: 100vh;
   width: 100%;
   background-color: rgba(51, 51, 51, 0.5);
   z-index: 10000;

`


export const ModalMain = styled.div`
    margin: 80px auto;
    background-color: var(--color-grey-3);
    width: 90%;
    border-radius: 9px;
    padding-bottom: 8px;
    div:first-child{
        background-color: var(--color-green-2);
        display: flex;
        justify-content: space-between;
        padding: 12px;
        color: var(--color-white);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        h2{
            font-size: 18px;
        }
    }
  


    div:last-child{
      text-align: center;
      margin-top: 35px;
      h3{
        margin-bottom: 8px;
      }
      p{
        margin-bottom: 35px;
      }
    }
    ul{
      height: 250px;
      overflow: auto;
    }
`


export const TotalDivStyled =  styled.div`
    border-top: 2px solid var(--color-grey-4);
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
`