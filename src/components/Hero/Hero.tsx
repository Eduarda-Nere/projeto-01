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

    return (
        <HeroSection id="top">
            <HeroBg
                ref={parallaxRef}
                src={heroVideo}
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
                        <HeroTitle $visible={visible}>Lorem ipsum dolor consectetur</HeroTitle>
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