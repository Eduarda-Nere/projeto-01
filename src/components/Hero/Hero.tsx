import { useState, useEffect } from 'react';
import {
    HeroSection,
    Wrap,
    HeroInner,
    HeroContent,
    HeroNumber,
    HeroLine,
    HeroTitle,
    HeroDesc,
} from './Hero.styles';
import fundoImg from '../../assets/img/fundo.jpg';

function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <HeroSection id="top" $bgImage={fundoImg}>
            <Wrap>
                <HeroInner>
                    <HeroContent $visible={visible}>
                        <HeroNumber $visible={visible}>
                            <HeroLine />
                            Nome completo
                        </HeroNumber>
                        <HeroTitle $visible={visible}>Título Provisório</HeroTitle>
                        <HeroDesc $visible={visible}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                            perspiciatis doloremque cupiditate culpa quis debitis modi ipsa beatae.
                        </HeroDesc>
                    </HeroContent>
                </HeroInner>
            </Wrap>
        </HeroSection>
    );
}

export default Hero;