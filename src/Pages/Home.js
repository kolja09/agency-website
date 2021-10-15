//This is home page, It will contains all the sections require in this page.
import HeroSection from "../Sections/Hero/Hero";
import About from "../Sections/About/About";
import Services from "../Sections/Services/Services";
import Testimonials from "../Sections/Testimonials/Testimonials";
import Contact from "../Sections/Contact/Contact";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <HeroSection/>
                <About/>
                <Services/>
                <Testimonials/>
                <Contact/>
            </Container>
            <Footer/>
            <ScrollToTop/>
        </>

    )
};

export default Home;
