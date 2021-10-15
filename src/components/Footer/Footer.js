// This is footer component
import twitter from '../../assets/twitter-square-brands.svg';
import instagram from '../../assets/instagram-square-brands.svg';
import gmail from '../../assets/envelope-open-solid.svg';
import {FOOTER, FooterLink, HomeLink, LeftText, RightText} from "./FooterElemenst";

const Footer = () => {
  return <FOOTER>
    <LeftText>
      © 2021 Built and Design by <HomeLink to='/'>@kolja</HomeLink>
    </LeftText>
    <RightText>
      Reach out to me via 😉
      <FooterLink to='/'>
        <img src={twitter} alt='Twitter' />
      </FooterLink>
      <FooterLink to='/'>
        <img src={instagram} alt='Instagram' />
      </FooterLink>
      <FooterLink to='/'>
        <img src={gmail} alt='Twitter' />
      </FooterLink>
    </RightText>
  </FOOTER>;
};

export default Footer;
