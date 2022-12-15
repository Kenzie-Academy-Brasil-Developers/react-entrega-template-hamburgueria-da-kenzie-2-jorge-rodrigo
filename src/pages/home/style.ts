import styled, { css } from "styled-components";

interface iSearchStyledProps{
    onActive: boolean 
}

export const NavStyled = styled.nav<iSearchStyledProps>`
   display: flex;
   justify-content: space-between;
   background-color: var(--color-grey-3);
   padding-bottom: 25px;
   width: 100%; 

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
        z-index: 0;
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

export const SearchBarDiv = styled.div<iSearchStyledProps>`

   position: relative;
   border-radius: 60px;
   transition: 0.5s;
   height: 25px;


   div input{
    ${({ onActive }) => {
      switch (onActive) {
        default: case false:
            return css`
             opacity: 0;
            `;
          case true :
             return css`
             opacity: 100;
             `;
   }}};
    position: absolute;
    top: -4px;
    left: -220px;
    width: 250px;
    @media(max-width: 360px){
        width: 150px;
        left: -120px;
    }
    background-color: var(--color-white);
    z-index: 1;
    height: 38px;
    border-radius: 12px;
    outline: none;
    padding: 8px;
    transition: 1.0s;
    border: 2px solid var(--color-grey-1);
    
   }

   img{
    ${({ onActive }) => {
      switch (onActive) {
        default: case false:
            return css`
             background-color: transparent;
             height: 20px;
             width: 20px;
            `;
          case true :
             return css`
              padding: 6px 6px;
              height: 25px;
              width: 25px;
              background-color: var(--color-green-2);
              border-radius: 8px;
             `;
   }}};
    cursor: pointer;
    
    position: absolute;
    top: 2px;
    right: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
   
   }


`