// This is footer component
import twitter from '../../assets/twitter-square-brands.svg';
import instagram from '../../assets/instagram-square-brands.svg';
import gmail from '../../assets/envelope-open-solid.svg';
import styled from "styled-components";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em){
    flex-direction: column;
    align-items: center;
    div{
      &:first-child{
        margin-bottom:1rem;
      }
    }
  }
`;

const LeftText = styled.div`

`;
const RightText = styled.div`
display: flex;
  align-items: center;
  img{
    width: 1.5rem;
    filter:invert(100%);
    margin-left: 1rem;
    transition:all 0.2s ease-in-out;
  }
  a{
    &:hover{
      img{
        transform: scale(1.5);
        filter:invert(50%) sepia(100%) saturate(300%) hue-rotate(216deg) brightness(100%) contrast(97%);
      }
    }
  }
`;



const Footer = () => {
  return <FOOTER>
    <LeftText>
      © 2021 Built and Design by <a href='#home'>@CodeBucks</a>
    </LeftText>
    <RightText>
      Reach out to me via 😉
      <a href='http://twitter.com'>
        <img src={twitter} alt='Twitter' />
      </a>
      <a href='http://instagram.com'>
        <img src={instagram} alt='Instagram' />
      </a>
      <a href='mailto:codebucks27@gmail.com'>
        <img src={gmail} alt='Twitter' />
      </a>
    </RightText>
  </FOOTER>;
};

export default Footer;
