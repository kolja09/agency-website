// This is Header component /Navigation Component
import logo from '../../assets/logo.svg';
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Button, HamburgerBtn, Headers, Logo, MobileLink, MobileMenu, Nav, NavLinks} from "./HeaderElements";



const Header = () => {
    const [click, setClick] = useState(false)
    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

        const ScrollUp = (id,e) => {
            e.preventDefault()
            const element = document.getElementById(id)
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        };
    const handleClick = (id,e) =>{
        setClick(!click);
        ScrollUp(id,e);
    }


    useEffect(() =>{
      const element = ref.current;
      const mq = window.matchMedia('(max-width:40em)');
      if(mq.matches){
          gsap.to(element,{
              position:'fixed',
              top:'0',
              left:'0',
              right:'0',
              padding:'1rem 2.5rem',
              borderRadius: '0 0 50px 50px',
              border:'2px solid var(--white)',
              duration:1,
              ease: 'power1.out',
              scrollTrigger:{
                  trigger:element,
                  start:'bottom+=200 top',
                  end:'+=100',
                  scrub:true,
              }
          })
      }else {
          gsap.to(element,{
              position:'fixed',
              top:'1rem',
              left:'3rem',
              right:'3rem',
              padding:'1.5rem 2rem',
              borderRadius: '50px',
              border:'3px solid var(--white)',
              duration:1,
              ease: 'power1.out',
              scrollTrigger:{
                  trigger:element,
                  start:'bottom+=300 top',
                  end:'+=250',
                  scrub:true,
              }
          })
      }
    },[])
    return (
        <Headers ref={ref}>
            <Logo to='/'>
                <img src={logo} alt='CodeBucks'/>
                <h3>CodeBucks</h3>
            </Logo>
            <Nav>
                <NavLinks to='/' onClick={(e)=>handleClick('home',e)}>Home</NavLinks>
                <NavLinks to='/' onClick={(e)=>handleClick('about',e)}>About Us</NavLinks>
                <NavLinks to='/' onClick={(e)=>handleClick('services',e)}>Services</NavLinks>
                <NavLinks to='/' onClick={(e)=>handleClick('contact',e)}>
                    <Button>Contact Us</Button>
                </NavLinks>
            </Nav>
            <HamburgerBtn onClick={() => setClick(!click)} clicked={click}>
                <span/>
            </HamburgerBtn>
            <MobileMenu clicked={click}>
                <MobileLink to='/' onClick={(e)=>handleClick('home',e)}>Home</MobileLink>
                <MobileLink to='/' onClick={(e)=>handleClick('about',e)}>About Us</MobileLink>
                <MobileLink to='/' onClick={(e)=>handleClick('services',e)}>Services</MobileLink>
                <MobileLink to='/' onClick={(e)=>handleClick('contact',e)}>
                    <Button>Contact Us</Button>
                </MobileLink>
            </MobileMenu>
        </Headers>
    )
};

export default Header;
