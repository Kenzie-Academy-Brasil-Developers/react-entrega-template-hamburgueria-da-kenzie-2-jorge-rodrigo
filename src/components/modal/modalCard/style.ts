import styled from "styled-components";


export const CartListStyled = styled.li`
   height: 42%;
   width: 100%;
   padding: 10px 8px;
   display: flex;
   @media(min-width: 700px){
      width: 100%;
   }

   img{
    height: 100%;
    width: 105px;
    background-color: var(--color-grey-1);
    border-radius: 8px;
   } 
    div{
        width: 80%;
        padding: 0 10px;
        height: 20%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        div:first-child{
          display: flex;
          justify-content: flex-start;
          padding: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          background-color: transparent;
          width: 110px;
          height: 18px;
          @media(min-width: 750px){
            width: 200px;
          }

         

          @media(min-width: 400px){
            width: 190px;
          }

          h2{
            color: var(--color-black);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      
        img{
            width: 15px;
            height: 15px;
            cursor: pointer;
           
        }
        div{
            display: flex;
            justify-content: flex-start;
            gap: 12px;
            
            button{
                text-align: center;
                font-size:16px;
                background-color: var(--color-grey-1);
                border: 2px solid var(--color-grey-1);
                color: var(--color-orange);
                border-radius: 8px;
                width: 20px;
                height: 20px;
            }
        }
    }
`