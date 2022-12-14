import styled, { css } from "styled-components";


interface iButtonStyledProps{
    colorBg: string
}

export const ButtonStyled = styled.button<iButtonStyledProps>`
   margin: 10px auto;
   width: 100%;
   height: 50px;
   border-radius: 8px;
   font-size: 14px;
   text-align: center;
   ${({colorBg}) => {
      switch (colorBg) {
        default: case"green":
            return css`
              background-color: var(--color-green);
              color:var(--color-white);
              border: 2px solid var(--color-green);
            `;
          case "grey" :
             return css`
             background-color: var(--color-grey-3);
              color:var(--color-grey-4);
              border: 2px solid var(--color-grey-3);
             `;
   }}};
`