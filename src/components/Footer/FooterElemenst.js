import styled from "styled-components";
import {Link} from "react-router-dom";

export const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const LeftText = styled.div`

`;

export const RightText = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.5rem;
    filter: invert(100%);
    margin-left: 1rem;
    transition: all 0.2s ease-in-out;
  }
`;

export const FooterLink = styled(Link)`
  &:hover {
    img {
      transform: scale(1.5);
      filter: invert(50%) sepia(100%) saturate(300%) hue-rotate(216deg) brightness(100%) contrast(97%);
    }
  }
`;

export  const HomeLink = styled(Link)`

`;