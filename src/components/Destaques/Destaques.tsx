import { useState, useEffect, useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import {
    DestaquesSection,
    Wrap,
    SectionHeadCenter,
    Eyebrow,
    Title,
    Description,
    Carousel,
    Viewport,
    Track,
    Slide,
    SlideImg,
    SlideInfo,
    Tag,
    SlideTitle,
    SlideDesc,
    SlideBtn,
    Controls,
    Arrows,
    ArrowBtn,
    Dots,
    Dot,
} from './Destaques.styles';
import fundoImg from '../../assets/img/fundo.jpg';
import ServicosTabs from '../ServicosTabs/ServicosTabs';

const SLIDES = [
    { alt: 'Estratégia', tag: 'Lorem 1', title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { alt: 'Inovação', tag: 'Lorem 2', title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { alt: 'Sustentabilidade', tag: 'Lorem 3', title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { alt: 'Comunidade', tag: 'Lorem 4', title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

function Destaques() {
    const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
    const { ref: carouselRef, inView: carouselInView } = useInView<HTMLDivElement>();

    const [current, setCurrent] = useState(0);
    const startX = useRef(0);

    const goTo = (index: number) => {
        setCurrent((index + SLIDES.length) % SLIDES.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 6500);
        return () => clearInterval(timer);
    }, []);

    const handlePointerDown = (e: React.PointerEvent) => {
        startX.current = e.clientX;
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        const diff = e.clientX - startX.current;
        if (diff > 50) goTo(current - 1);
        else if (diff < -50) goTo(current + 1);
    };

    return (
        <DestaquesSection id="destaques">
            <Wrap>
                <SectionHeadCenter ref={headRef} $visible={headInView}>
                    <Eyebrow>Destaques</Eyebrow>
                    <Title>Destaques</Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio
                        recusandae pariatur, nemo quod ut optio at.
                    </Description>
                </SectionHeadCenter>

                <Carousel ref={carouselRef} $visible={carouselInView}>
                    <Viewport>
                        <Track
                            $index={current}
                            onPointerDown={handlePointerDown}
                            onPointerUp={handlePointerUp}
                        >
                            {SLIDES.map((slide) => (
                                <Slide key={slide.title + slide.tag}>
                                    <SlideImg>
                                        <img src={fundoImg} alt={slide.alt} loading="lazy" />
                                    </SlideImg>
                                    <SlideInfo>
                                        <Tag>{slide.tag}</Tag>
                                        <SlideTitle>{slide.title}</SlideTitle>
                                        <SlideDesc>{slide.desc}</SlideDesc>
                                        <SlideBtn href="#">Saiba mais</SlideBtn>
                                    </SlideInfo>
                                </Slide>
                            ))}
                        </Track>
                    </Viewport>

                    <Controls>
                        <Arrows>
                            <ArrowBtn aria-label="Destaque anterior" onClick={() => goTo(current - 1)}>
                                <i className="fas fa-chevron-left" aria-hidden="true" />
                            </ArrowBtn>
                            <ArrowBtn aria-label="Próximo destaque" onClick={() => goTo(current + 1)}>
                                <i className="fas fa-chevron-right" aria-hidden="true" />
                            </ArrowBtn>
                        </Arrows>

                        <Dots role="tablist" aria-label="Navegação do carrossel">
                            {SLIDES.map((slide, i) => (
                                <Dot
                                    key={slide.title + i}
                                    role="tab"
                                    aria-selected={i === current}
                                    aria-label={`Ir ao destaque ${i + 1}`}
                                    $active={i === current}
                                    onClick={() => goTo(i)}
                                />
                            ))}
                        </Dots>
                    </Controls>
                </Carousel>
                <ServicosTabs />
            </Wrap>
        </DestaquesSection>
    );
}

export default Destaques;