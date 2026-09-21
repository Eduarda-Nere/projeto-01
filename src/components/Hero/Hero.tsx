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
import { TextRoll } from '../ui';
import { useParallax } from '../../hooks/useParallax';
import { hideInitialLoader } from '../../utils/initialLoader';
import heroVideo from '../../assets/video/video.mp4';

const LOADER_MAX_WAIT = 3000;

function Hero() {
    const [visible, setVisible] = useState(false);
    const parallaxRef = useParallax<HTMLVideoElement>(0.25);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timeout = window.setTimeout(hideInitialLoader, LOADER_MAX_WAIT);
        return () => window.clearTimeout(timeout);
    }, []);

    return (
        <HeroSection id="top">
            <HeroBg
                ref={parallaxRef}
                src={heroVideo}
                onLoadedData={() => hideInitialLoader()}
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
                        <HeroTitle $visible={visible}>
                            {visible && (
                                <TextRoll
                                    duration={0.6}
                                    getEnterDelay={(i) => i * 0.03}
                                    getExitDelay={(i) => i * 0.03 + 0.2}
                                >
                                    Um contrato. Um responsável. Uma data.
                                </TextRoll>
                            )}
                        </HeroTitle>
                        <HeroDesc $visible={visible}>
                            A Lopez Engenharia assume a obra inteira - viabilidade, projeto,
                            aprovação, execução e entrega - em empreendimentos residenciais,
                            comerciais e industriais. Você acompanha, nós respondemos.
                        </HeroDesc>
                    </HeroContent>
                </HeroInner>
            </Wrap>
        </HeroSection>
    );
}

export default Hero;