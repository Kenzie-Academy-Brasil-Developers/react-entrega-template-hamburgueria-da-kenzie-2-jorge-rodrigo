import styled from "styled-components";


export const NavStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   background-color: var(--color-grey-3);
   padding-bottom: 25px;

   div:last-child{
    margin-top: 25px;
    display: flex;
    padding-right: 25px;
    gap: 25px;
   }
   img{
    height: 20px;
    width: 20px;
    cursor: pointer;
   }
`

export const CartStyle = styled.div`
    cursor: pointer;
    position: relative;
    span{
        position: absolute;
        top: -7px;
        right: -7px;
        padding: 0 4px;
        color: var( --color-white);
        background-color: var(--color-green);
        border-radius: 4px;
        font-weight: 900;
        font-size: 12px;
    }
`

export const ListSectionStyled = styled.div`
   
   ul{
    list-style: none;
    width: 100% ; 
    display: flex ;
    height: 430px;
    overflow-x: auto;
    gap: 25px;
    padding: 20px 15px;
    flex-direction: row;
   }

   li{
    border: 2px solid var(--color-grey-1);
    height: 90%;
    min-width: 60%;
    border-radius: 6px;
    transition: .2s ease-in;
    display: flex;
    flex-direction: column;

    :hover{
        border: 2px solid var(--color-green-2);
        button{
            background-color: var(--color-green-2);
            border: 2px solid var(--color-green-2);
        }
        transform: scale(1.05);
    }

   img{
        height: 50%;
        width: 100%;
        background-color: var(--color-grey-3);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    h2{
        font-size: 18px;
        font-weight: bold;
        padding-left: 10px; 
        padding-top: 6px;
    }

    p{
        font-size: 14px;
        color: var(--color-grey-2);
        padding-left: 10px; 
        padding-top: 15px;
    }

    span{
        font-size: 16px;
        color: var(--color-green-2);
        font-weight: bold;
        padding-left: 10px; 
        padding-top: 18px;
    }

    button{
        background-color: var(--color-grey-5);
        border: 2px solid var(--color-grey-5);
        color: var(--color-white);
        border-radius: 8px;
        width: 45%;
        margin-left: 10px;
        margin-top: 15px;
        height: 32px;
    }
   }
`