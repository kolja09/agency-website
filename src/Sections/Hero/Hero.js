// This is HeroSection component, Main top section of website
import Pink from '../../assets/blobPink.png';
import White from '../../assets/blob-white.png';
import Purple from '../../assets/blob-purple.png';
import Arrow from '../../assets/Arrow Right.svg';
import Mobile from '../../assets/mobile.svg';
import {
    Blobs,
    Circle,
    CTA,
    Herosection,
    LeftBlock,
    MainContent, MobileSvg,
    PinkBlob,
    PurpleBlob, SubText,
    Title,
    Topic, WhiteBlob
} from "./HeroElement";

const HeroSection = () => {
    return <Herosection id='home'>
        <Blobs>
            <PinkBlob>
                <img src={Pink} alt='Pink Blob' width='400' height='400'/>
            </PinkBlob>
            <WhiteBlob>
                <img src={White} alt='Pink White' width='400' height='400'/>
            </WhiteBlob>
            <PurpleBlob>
                <img src={Purple} alt='Pink Purple' width='400' height='400'/>
            </PurpleBlob>
        </Blobs>
        <MainContent>
            <LeftBlock>
                <Topic>
                    <Circle/> <span>We Build Web</span>
                </Topic>
                <Title>
                    Transforming your digital presence
                </Title>
                <SubText>we help fast growing companies build award winning websites</SubText>
                <CTA>
                    Get in touch &nbsp; <img src={Arrow} alt='CTA' width='400' height='400'/>
                </CTA>
            </LeftBlock>
            <MobileSvg src={Mobile} alt='Mobile Svg' width='400' height='400'/>
        </MainContent>
    </Herosection>
};

export default HeroSection;
