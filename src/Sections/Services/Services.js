// This is Services component
import styled from "styled-components";
import SvgBlock from "../../components/SvgBlock/SvgBlock";
import TextBlock from "../../components/TextBlock/TextBlock";
import Tube from '../../assets/3dtube.png';
import Cone from '../../assets/3dtriangle.png';
import Capsule from '../../assets/3dcapsule.png';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import {Background, Content, Line, OBJ, ServiceSection, Title, Triangle} from "./ServicesElements";

const Services = () => {
    const ref = useRef(null);
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger)

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el)
        }
        console.log('reveal refs', revealRefs.current)
    };

    useEffect(() => {
        const element = ref.current;
        const mq = window.matchMedia('(max-width:40em)');
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: document.getElementById('services'),
                start: 'top top+=180',
                end: 'bottom bottom',
                pin: element,
                pinReparent: true,

            }
        });
        const line = document.getElementById('line')
        t1.fromTo(
            line,
            {
                height: '15rem',
            },
            {
                height: '3rem',
                duration: 2,
                scrollTrigger: {
                    trigger: line,
                    start: 'top top+=200',
                    end: 'bottom top+=220',
                    scrub: true,
                },
            }
        )
        revealRefs.current.forEach((el, index) => {
            if (mq.matches) {
                t1.from(
                    el.childNodes[0],
                    {
                        x: -300,
                        opacity: 0,
                        duration: 2,
                        ease: 'power2',
                        scrollTrigger: {
                            trigger: el,
                            id: `section-${index + 1}`,
                            start: 'top center+=200',
                            end: 'bottom bottom-=100',
                            scrub: true,
                            snap: true,
                        },
                    }).to(el.childNodes[1],
                    {
                        transform: 'scale(0)',
                        duration: 2,
                        ease: 'power2.inOut',
                        scrollTrigger: {
                            trigger: el.childNodes[1],
                            id: `section-${index + 1}`,
                            start: 'top center',
                            end: 'bottom center',
                            scrub: true,
                            snap: true,
                        }
                    }).from(el.childNodes[2],
                    {
                        y: 400,
                        duration: 2,
                        ease: 'power2',
                        scrollTrigger: {
                            trigger: el,
                            id: `section-${index + 1}`,
                            start: 'top center+=100',
                            end: 'bottom center-=200',
                            scrub: true,
                            snap: true,
                        }
                    }).to(el,
                    {
                        opacity: 0,
                        ease: 'power2',
                        scrollTrigger: {
                            trigger: el,
                            id: `section-${index + 1}`,
                            start: 'top top+=300',
                            end: 'center top+=300',
                            scrub: true,
                            snap: true,
                        }
                    });
            } else {
                t1.from(
                    el.childNodes[0],
                    {
                        x: -300,
                        opacity: 0,
                        duration: 2,
                        ease: 'power2',
                        scrollTrigger: {
                            trigger: el,
                            id: `section-${index + 1}`,
                            start: 'top center+=100',
                            end: 'bottom bottom-=200',
                            scrub: true,
                            snap: true,
                        },
                    }).to(el.childNodes[1],
                    {
                        transform: 'scale(0)',
                        duration: 2,
                        ease: 'power2.inOut',
                        scrollTrigger: {
                            trigger: el.childNodes[1],
                            id: `section-${index + 1}`,
                            start: 'top center',
                            end: 'bottom center',
                            scrub: true,
                            snap: true,
                        }
                    }).from(el.childNodes[2],
                    {
                        y: 400,
                        duration: 2,
                        ease: 'power2',
                        scrollTrigger: {
                            trigger: el,
                            id: `section-${index + 1}`,
                            start: 'top center+=100',
                            end: 'bottom center-=200',
                            scrub: true,
                            snap: true,
                        }
                    }).to(el,
                    {
                        opacity: 0,
                        ease: 'power2',
                        scrollTrigger: {
                            trigger: el,
                            id: `section-${index + 1}`,
                            start: 'top top+=200',
                            end: 'center top+=300',
                            scrub: true,
                            snap: true,
                        }
                    });
            }
        });
    }, []);

    return <ServiceSection id='services'>
        <Background ref={ref}>
            <Title>
                What We Do
            </Title>
            <Line id='line'/>
            <Triangle/>
        </Background>
        <Content ref={addToRefs}>
            <TextBlock topic='Design' title='We build award winning Designs'
                       subText='We help clients to build great design to attract more customers'/>
            <OBJ>
                <img src={Tube} alt='Tube' width='400' height='400'/>
            </OBJ>
            <SvgBlock svg='Design.svg'/>
        </Content>
        <Content ref={addToRefs}>
            <TextBlock topic='Develop' title='We Develope high quality Web & App'
                       subText='We build appropriate solution to develope your website & app with best tools available'/>
            <OBJ>
                <img src={Cone} alt='Cone' width='400' height='400'/>
            </OBJ>
            <SvgBlock svg='Develope.svg'/>
        </Content>
        <Content>
            <TextBlock topic='Support' title='We provide support for your digital presence'
                       subText='Once your system is online, we will stay on hand to help you use it and provide technical support and maintenance
your busi                       ness'/>
            <OBJ>
                <img src={Capsule} alt='Capsule' width='400' height='400'/>
            </OBJ>
            <SvgBlock svg='Support.svg'/>
        </Content>
    </ServiceSection>;
};

export default Services;
