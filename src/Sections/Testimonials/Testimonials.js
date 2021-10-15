import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Card from "../../components/Card/Card";
import {Carousal, Section, Title} from "./TestimonialsElements";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return <Section>
        <Title>
            Few good words about us!
        </Title>
        <Carousal>
            <Slider {...settings}>
                <Card
                    text='CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them.'
                    name='Jenny (CodeCall)'
                    image='avatar-1'/>
                <Card
                    text='CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them.'
                    name='Bob (Zendesk)'
                    image='avatar-2'/>
                <Card
                    text='CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them.'
                    name='Cassy (Asus)'
                    image='avatar-3'/>
                <Card
                    text='CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them.'
                    name='Jason (CodeCall)'
                    image='avatar-4'/>
            </Slider>
        </Carousal>
    </Section>;
};

export default Testimonials;
