import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { SectionWrap } from '../ui';
import {
    CulturaSection,
    CulturaIntro,
    Title,
    Subtitle,
    CulturaGrid,
    CulturaContent,
    TabButton,
    TabContent,
    TabTitle,
    TabDescription,
    TopicList,
    Topic,
    TopicTitle,
    TopicParagraph,
    ProgressBar,
    ProgressFill,
    GalleryWrapper,
    GalleryFrame,
    GallerySlide,
} from './Cultura.styles';
import fundoImg from '../../assets/img/fundo.jpg';

const GROUPS = [
    {
        id: 'metodo',
        alt: 'O método — como pensamos a obra',
        title: (
            <>
                O método
                <span className="dot" aria-hidden="true" />
                como pensamos a obra
            </>
        ),
        image: fundoImg,
        topics: [
            {
                title: 'Simplificação',
                paragraph:
                    'Quebrar a obra até que cada parte seja executável sem improviso.',
            },
            {
                title: 'Organização e planejamento',
                paragraph:
                    'Compatibilizar projetos, sequenciar serviços e travar fornecedor antes da obra começar.',
            },
        ],
    },
    {
        id: 'pessoas',
        alt: 'As pessoas — como trabalhamos juntos',
        title: (
            <>
                As pessoas
                <span className="dot" aria-hidden="true" />
                como trabalhamos juntos
            </>
        ),
        image: fundoImg,
        topics: [
            {
                title: 'Delegação com autoridade',
                paragraph:
                    'Quem executa tem informação e autoridade para decidir.',
            },
            {
                title: 'Evolução a cada obra',
                paragraph:
                    'Toda obra termina com revisão do que atrasou e do que será diferente.',
            },
            {
                title: 'Servir é resolver',
                paragraph:
                    'O cliente contratou uma obra, não a tarefa de coordenar fornecedores.',
            },
        ],
    },
    {
        id: 'compromisso',
        alt: 'O compromisso — o que garantimos',
        title: (
            <>
                O compromisso
                <span className="dot" aria-hidden="true" />
                o que garantimos
            </>
        ),
        image: fundoImg,
        topics: [
            {
                title: 'Transparência',
                paragraph:
                    'O cliente vê o mesmo que nós: avanço, custo e desvio.',
            },
            {
                title: 'Previsibilidade',
                paragraph:
                    'Só assumimos prazo depois do projeto executivo, e não antes.',
            },
            {
                title: 'Segurança',
                paragraph:
                    'Serviço que não pode ser feito com segurança não é feito.',
            },
        ],
    },
];

const AUTO_PLAY_DURATION = 8000;

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
        x: 0,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? '-100%' : '100%',
    }),
};

function Cultura() {
    const { ref: headRef, inView: headInView } = useInViewOnce<HTMLDivElement>();
    const { ref: bodyRef, inView: bodyInView } = useInViewOnce<HTMLDivElement>();
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goTo = useCallback((next: number, dir: number) => {
        setDirection(dir);
        setActiveIndex(next);
    }, []);

    const handleNext = useCallback(() => {
        const next = (activeIndex + 1) % GROUPS.length;
        goTo(next, 1);
    }, [activeIndex, goTo]);

    const handleTabClick = (index: number) => {
        if (index === activeIndex) return;
        const dir = index > activeIndex ? 1 : -1;
        goTo(index, dir);
        setIsPaused(false);
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, AUTO_PLAY_DURATION);

        return () => clearInterval(interval);
    }, [activeIndex, isPaused, handleNext]);

    return (
        <CulturaSection id="cultura">
            <SectionWrap>
                <CulturaIntro ref={headRef} $visible={headInView}>
                    <Title>Cultura Lopez</Title>
                    <Subtitle>
                        O critério que decide o que aceitamos e o que recusamos — em
                        cada proposta, cada obra e cada decisão de canteiro.
                    </Subtitle>
                </CulturaIntro>

                <CulturaGrid ref={bodyRef} $visible={bodyInView}>
                    <CulturaContent>
                        {GROUPS.map((group, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <TabButton
                                    key={group.id}
                                    $active={isActive}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <ProgressBar>
                                        {isActive && (
                                            <ProgressFill
                                                key={`progress-${index}-${isPaused}`}
                                                initial={{ height: '0%' }}
                                                animate={isPaused ? { height: '0%' } : { height: '100%' }}
                                                transition={{
                                                    duration: AUTO_PLAY_DURATION / 1000,
                                                    ease: 'linear',
                                                }}
                                            />
                                        )}
                                    </ProgressBar>

                                    <TabContent>
                                        <TabTitle $active={isActive}>
                                            {group.title}
                                        </TabTitle>

                                        <TabDescription $active={isActive}>
                                            <TopicList>
                                                {group.topics.map((topic) => (
                                                    <Topic key={topic.title}>
                                                        <TopicTitle>{topic.title}</TopicTitle>
                                                        <TopicParagraph>
                                                            {topic.paragraph}
                                                        </TopicParagraph>
                                                    </Topic>
                                                ))}
                                            </TopicList>
                                        </TabDescription>
                                    </TabContent>
                                </TabButton>
                            );
                        })}
                    </CulturaContent>

                    <GalleryWrapper
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <GalleryFrame>
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <GallerySlide
                                    key={activeIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    onClick={handleNext}
                                >
                                    <img
                                        src={GROUPS[activeIndex].image}
                                        alt={GROUPS[activeIndex].alt}
                                    />
                                </GallerySlide>
                            </AnimatePresence>
                        </GalleryFrame>
                    </GalleryWrapper>
                </CulturaGrid>
            </SectionWrap>
        </CulturaSection>
    );
}

export default Cultura;