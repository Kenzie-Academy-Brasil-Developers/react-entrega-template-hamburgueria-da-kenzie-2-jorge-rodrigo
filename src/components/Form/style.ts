import styled from "styled-components";


export const FormStyled = styled.form`
    border: 1px solid var(--color-grey-1);
    width: 95%;
    padding: 0 10px;
    margin: 15px auto;
    padding-bottom: 25px;
    border-radius: 8px;

    h2{
        font-size: 16px;
        margin: 12px 0;
    }

    p{
        color: var(--color-grey-2);
        text-align: center;
        margin: 40px 0;
        font-size: 14px;
    }
    a{
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: transparent;
     padding: 10px 50px;
     margin: 0 20px;
     text-decoration: none;
     border-radius: 8px;
     background-color: var(--color-grey-3);
     color:var(--color-grey-4);
     border: 2px solid var(--color-grey-3);
    }
`