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
import { SplitText } from '../ui';
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
                        <HeroTitle
                            $visible={visible}
                            aria-label="Um contrato. Um responsável. Uma data."
                        >
                            {visible && (
                                <SplitText
                                    tag="span"
                                    text="Um contrato. Um responsável. Uma data."
                                    className="hero-split-text"
                                    delay={30}
                                    duration={0.6}
                                    ease="power3.out"
                                    splitType="words, chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="left"
                                />
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