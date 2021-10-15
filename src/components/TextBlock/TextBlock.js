// This is TextBlock component, To render text with same format


import {Circle, LeftBlock, SubText, Title, Topic} from "./TextBlockElements";

const TextBlock = ({topic, title, subText, children}) => {
    return <LeftBlock>
        <Topic>
            <Circle/> <span>{topic}</span>
        </Topic>
        <Title>
            {title}
        </Title>
        <SubText>{subText}</SubText>
        {children}
    </LeftBlock>;
};

export default TextBlock;
