import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  margin-bottom: 3rem;
  position: relative;
  color: var(--white);

  &::before {
    content: '';
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--pink);
    transform: translate(-50%);
  }
`;

export const Icons = styled.div`
  display: inline;
  margin-bottom: 3rem;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;

    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }

    &::placeholder {
      color: #eff7f8;
      opacity: 0.8;
    }

    &[name='name'] {
      margin-right: 2rem;
    }
  }

  textarea {
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;

    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }

    &::placeholder {
      color: #eff7f8;
      opacity: 0.8;
    }
  }

  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }

  }
`;

export const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name='name'] {
        margin-right: 0;
      }
    }
  }
`;

export const LinkIcons = styled(Link)`

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    img {
      filter: invert(20%) sepia(100%) saturate(300%) hue-rotate(580deg);
    }
  }
`;