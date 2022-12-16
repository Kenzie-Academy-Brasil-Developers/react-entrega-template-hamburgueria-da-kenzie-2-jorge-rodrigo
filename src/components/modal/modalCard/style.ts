import styled from "styled-components";


export const CartListStyled = styled.li`
   height: 65%;
   width: 100%;
   padding: 8px 8px;
   display: flex;
   @media(min-width: 700px){
      width: 100%;
   }
   img{
    height: 80%;
    width: 105px;
    background-color: var(--color-grey-6);
   }
    div{
        width: 80%;
        padding: 0 10px;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      
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
                background-color: var(--color-grey-6);
                border: 2px solid var(--color-grey-6);
                color: var(--color-orange);
                width: 20px;
                height: 20px
            }
        }
    }
`