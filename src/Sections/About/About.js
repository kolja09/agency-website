// This is About component, It will contain about us info.
import wave from '../../assets/waves.svg';
import hand from '../../assets/hand.svg'
import rocket from '../../assets/rocket image.png'
import human from '../../assets/human.svg'
import {
    AboutSection,
    AboutText,
    Circle,
    Content,
    CurvedLine,
    Hand,
    Human,
    Main,
    Rocket, Text,
    Title,
    Waves
} from "./AboutElements";

const About = () => {
    return <AboutSection id='about'>
        <Waves src={wave} alt='Waves' width='400' height='400'/>
        <Hand>
            <img src={hand} alt='Hand' width='400' height='400'/>
        </Hand>
        <Main>
            <div>
                <Title>About Us</Title>
                <CurvedLine/>
            </div>
            <Content>
                <Rocket>
                    <img src={rocket} alt='rocket' width='400' height='400'/>
                </Rocket>
                <AboutText>
                    <Human>
                        <img src={human} alt='human' width='400' height='400'/>
                    </Human>
                        <Text>
                            We help our customers to tell about themselves, to grow and stand
                            out in an increasingly competitive digital world, through creative
                            projects that are able to attract and involve, creating strategic
                            value.
                        </Text>
                        <div>
                            <Circle style={{backgroundColor: 'var(--purple)'}}/>
                            <Circle style={{backgroundColor: 'var(--pink)'}}/>
                            <Circle style={{backgroundColor: 'var(--black)'}}/>
                        </div>
                </AboutText>
            </Content>
        </Main>
    </AboutSection>;
};

export default About;
