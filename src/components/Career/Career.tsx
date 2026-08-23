import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import {
    CareerSection,
    Wrap,
    CareerGrid,
    CareerContent,
    HeaderWrapper,
    Title,
    TabButton,
    TabContent,
    TabTitle,
    TabDescription,
    TabDescriptionText,
    ProgressBar,
    ProgressFill,
    GalleryWrapper,
    GalleryContainer,
    GalleryImage,
    ImageOverlay,
    NavButtons,
    NavButton,
} from './Career.styles';
import fundoImg from '../../assets/img/fundo.jpg';

const SERVICES = [
    {
        title: 'Lorem ipsum dolor sit amet',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: fundoImg,
    },
    {
        title: 'Lorem consequat',
        description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: fundoImg,
    },
    {
        title: 'Lorem ipsum dolor reprehenderit',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: fundoImg,
    },
];

const AUTO_PLAY_DURATION = 5000;

function Career() {
    const { ref, inView } = useInView<HTMLDivElement>();
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handleNext = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
    }, []);

    const handleTabClick = (index: number) => {
        if (index === activeIndex) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
        setIsPaused(false);
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, AUTO_PLAY_DURATION);

        return () => clearInterval(interval);
    }, [activeIndex, isPaused, handleNext]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    return (
        <CareerSection id="carreira">
            <Wrap>
                <CareerGrid ref={ref}>
                    <CareerContent $visible={inView}>
                        <HeaderWrapper>
                            <Title>Carreira</Title>
                        </HeaderWrapper>

                        {SERVICES.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <TabButton
                                    key={index}
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
                                        <TabTitle $active={isActive}>{service.title}</TabTitle>

                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <TabDescription
                                                    as={motion.div}
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: [0.23, 1, 0.32, 1],
                                                    }}
                                                >
                                                    <TabDescriptionText>
                                                        {service.description}
                                                    </TabDescriptionText>
                                                </TabDescription>
                                            )}
                                        </AnimatePresence>
                                    </TabContent>
                                </TabButton>
                            );
                        })}
                    </CareerContent>

                    <GalleryWrapper>
                        <GalleryContainer
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <GalleryImage
                                    key={activeIndex}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: 'tween', duration: 0.6, ease: [0.23, 1, 0.32, 1] },
                                        opacity: { duration: 0.5 },
                                    }}
                                    onClick={handleNext}
                                >
                                    <img
                                        src={SERVICES[activeIndex].image}
                                        alt={SERVICES[activeIndex].title}
                                    />
                                    <ImageOverlay />
                                </GalleryImage>
                            </AnimatePresence>

                            <NavButtons>
                                <NavButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrev();
                                    }}
                                    aria-label="Anterior"
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </NavButton>
                                <NavButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNext();
                                    }}
                                    aria-label="Próximo"
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </NavButton>
                            </NavButtons>
                        </GalleryContainer>
                    </GalleryWrapper>
                </CareerGrid>
            </Wrap>
        </CareerSection>
    );
}

export default Career;