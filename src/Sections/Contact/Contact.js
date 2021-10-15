// This is Contact component, it will contain contact form.
import instagram from '../../assets/instagram-square-brands.svg';
import facebook from '../../assets/facebook-square-brands.svg';
import twitter from '../../assets/twitter-square-brands.svg';
import linkedin from '../../assets/linkedin-brands.svg';
import {ContactSection, Form, Icons, LinkIcons, Row, Title} from "./ContactElements";

const Contact = () => {
    return <ContactSection id='contact'>
        <Title>
            Get in touch
        </Title>
        <Icons>
            <LinkIcons to='/'>
                <img src={facebook} alt='FaceBook'/>
            </LinkIcons>
            <LinkIcons to='/'>
                <img src={linkedin} alt='Linkedin'/>
            </LinkIcons>
            <LinkIcons to='/'>
                <img src={twitter} alt='Twitter'/>
            </LinkIcons>
            <LinkIcons to='/'>
                <img src={instagram} alt='Instagram'/>
            </LinkIcons>
        </Icons>
        <Form>
            <Row>
                <input type='text' name='name' placeholder='you name'/>
                <input type='email' name='email' placeholder='enter working email id'/>
            </Row>
            <textarea placeholder='you message'
                      name='message'
                      cols='30'
                      rows='2'> </textarea>
            <div style={{margin: '0 auto'}}>
                <button onSubmit={false}>Submit</button>
            </div>
        </Form>
    </ContactSection>
};

export default Contact;
