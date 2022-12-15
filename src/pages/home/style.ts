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