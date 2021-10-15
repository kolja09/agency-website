//This is card component for Testimonials

import {CARD, Image, Name, Text} from "./CardElements";

const Card = ({name, text, image}) => {
    const Avatar = require(`../../assets/${image}.jpg`).default;
    return <CARD>
        <Image img={Avatar} width='400' height='400'/>
        <Text>{text}</Text>
        <Name>{name}</Name>
    </CARD>
};

export default Card;
