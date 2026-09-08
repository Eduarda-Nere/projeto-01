import { useState, useEffect } from 'react';
import {
    HeroSection,
    HeroBg,
    HeroOverlay,
    Wrap,
    HeroInner,
    HeroContent,
    HeroTitle,
    HeroDesc,
} from './Hero.styles';
import { useParallax } from '../../hooks/useParallax';
import heroVideo from '../../assets/video/video.mp4';

function Hero() {
    const [visible, setVisible] = useState(false);
    const parallaxRef = useParallax<HTMLVideoElement>(0.25);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const hideLoader = () => {
        const loader = document.getElementById('initial-loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.2s ease';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    };

    return (
        <HeroSection id="top">
            <HeroBg
                ref={parallaxRef}
                src={heroVideo}
                onLoadedData={hideLoader}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
            />
            <HeroOverlay />
            <Wrap>
                <HeroInner>
                    <HeroContent $visible={visible}>
                        <HeroTitle $visible={visible}>Um contrato. Um responsável. Uma data.</HeroTitle>
                        <HeroDesc $visible={visible}>
                            A Lopez Engenharia assume a obra inteira - viabilidade, projeto, aprovação, execução e entrega - em empreendimentos 
                            residenciais, comerciais e industriais. Você acompanha, nós respondemos.
                        </HeroDesc>
                    </HeroContent>
                </HeroInner>
            </Wrap>
        </HeroSection>
    );
}

export default Hero;