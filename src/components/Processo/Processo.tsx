import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from '../ui';
import {
    ProcessoWrapper,
    ProcessoInner,
    ProcessoLeft,
    Subtitle,
    Spine,
    SpineRow,
    SpineDot,
    SpineDotNumber,
    SpineLabel,
    SpineTrack,
    SpineTrackFill,
    StepList,
    StepPanel,
    StepBody,
    StepTitle,
    StepText,
    StepDelivery,
    StepDeliveryLabel,
    StepDeliveryText,
    MobileStepWrapper,
    MobileCarouselViewport,
    MobileCarouselInner,
    MobileNav,
    MobileNavButton,
    MobileCounter,
} from './Processo.styles';

type Step = {
    title: string;
    text: string;
    delivery: string;
};

const STEPS: Step[] = [
    {
        title: 'Viabilidade',
        text: 'Visita ao local, leitura do zoneamento, checagem de recuos, taxa de ocupação e uso permitido, e confronto com o orçamento-alvo. Antes de qualquer desenho, você descobre o que pode ser construído ali e quanto custa.',
        delivery: 'estudo de viabilidade + orçamento preliminar',
    },
    {
        title: 'Projeto integrado',
        text: 'Arquitetura, estrutura e instalações desenhadas e compatibilizadas entre si antes de a obra começar. É aqui que a interferência é resolvida por um traço, em vez de por uma quebra de parede.',
        delivery: 'pranchas executivas + memorial + orçamento fechado',
    },
    {
        title: 'Aprovação e preparação',
        text: 'Protocolo na prefeitura e demais órgãos, cronograma físico-financeiro fechado, plano de segurança e fornecedores contratados. As exigências são acompanhadas por nós, não pelo cliente no balcão.',
        delivery: 'alvará + cronograma + plano de segurança',
    },
    {
        title: 'Execução e entrega',
        text: 'Obra conduzida contra o cronograma, com medição e relatório periódicos: avanço, custo acumulado e desvios, se houver. Encerramento com vistoria e a chave na mão.',
        delivery: 'relatórios de obra + documentação de encerramento + chave',
    },
];

const EASE = [0.65, 0, 0.35, 1] as const;

const slideVariants = {
    enter: (dir: number) => ({
        x: dir > 0 ? '100%' : '-100%',
    }),
    center: {
        x: 0,
        transition: { duration: 0.55, ease: EASE },
    },
    exit: (dir: number) => ({
        x: dir > 0 ? '-100%' : '100%',
        transition: { duration: 0.55, ease: EASE },
    }),
};

function ProcessoStep({
    step,
    index,
    onRef,
}: {
    step: Step;
    index: number;
    onRef: (index: number, el: HTMLElement | null) => void;
}) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        onRef(index, ref.current);
        return () => onRef(index, null);
    }, [index, onRef]);

    return (
        <StepPanel ref={ref} id={`etapa-${index}`}>
            <StepBody>
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.text}</StepText>

                <StepDelivery>
                    <StepDeliveryLabel>Entrega</StepDeliveryLabel>
                    <StepDeliveryText>{step.delivery}</StepDeliveryText>
                </StepDelivery>
            </StepBody>
        </StepPanel>
    );
}

function Processo() {
    const stepsRef = useRef<(HTMLElement | null)[]>(
        STEPS.map(() => null)
    );
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [mobileIndex, setMobileIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(1);

    const handleRef = useCallback((index: number, el: HTMLElement | null) => {
        stepsRef.current[index] = el;
    }, []);

    useEffect(() => {
        const update = () => {
            const viewportCenter = window.innerHeight / 2;
            let closest = 0;
            let closestDist = Infinity;

            stepsRef.current.forEach((el, index) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.bottom < 0 || rect.top > window.innerHeight) return;

                const elCenter = rect.top + rect.height / 2;
                const dist = Math.abs(elCenter - viewportCenter);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = index;
                }
            });

            setActiveIndex((prev) => (prev === closest ? prev : closest));
        };

        let frame: number | null = null;
        const onScroll = () => {
            if (frame !== null) return;
            frame = requestAnimationFrame(() => {
                frame = null;
                update();
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        update();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, []);

    const goTo = (index: number) => {
        document
            .getElementById(`etapa-${index}`)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const goPrev = () => {
        if (mobileIndex === 0) return;
        setDirection(-1);
        setMobileIndex((prev) => Math.max(0, prev - 1));
    };

    const goNext = () => {
        if (mobileIndex === STEPS.length - 1) return;
        setDirection(1);
        setMobileIndex((prev) => Math.min(STEPS.length - 1, prev + 1));
    };

    const currentStep = STEPS[mobileIndex];
    const desktopProgress =
        STEPS.length > 1 ? (activeIndex / (STEPS.length - 1)) * 100 : 0;

    return (
        <ProcessoWrapper id="processo">
            <ProcessoInner>
                <ProcessoLeft>
                    <SectionTitle $maxWidth="20ch">
                        Do simples ao complexo, bem feito
                    </SectionTitle>
                    <Subtitle $maxWidth="56ch">
                        Quatro etapas, um contrato. Cada uma entrega algo
                        concreto antes da próxima começar - sem etapa pulada,
                        sem retrabalho.
                    </Subtitle>

                    <Spine aria-label="Etapas do processo">
                        <SpineTrack aria-hidden="true" $vertical>
                            <SpineTrackFill
                                $vertical
                                style={{
                                    transform: `scaleY(${desktopProgress / 100})`,
                                }}
                            />
                        </SpineTrack>

                        {STEPS.map((step, index) => {
                            const isActive = index <= activeIndex;
                            const isCurrent = index === activeIndex;

                            return (
                                <SpineRow
                                    key={step.title}
                                    type="button"
                                    onClick={() => goTo(index)}
                                    aria-label={`Ir para etapa ${index + 1}: ${step.title}`}
                                >
                                    <SpineDot $active={isActive} $current={isCurrent}>
                                        <SpineDotNumber $active={isActive}>
                                            {String(index + 1).padStart(2, '0')}
                                        </SpineDotNumber>
                                    </SpineDot>
                                    <SpineLabel $active={isActive}>
                                        {step.title}
                                    </SpineLabel>
                                </SpineRow>
                            );
                        })}
                    </Spine>
                </ProcessoLeft>

                <StepList>
                    {STEPS.map((step, index) => (
                        <ProcessoStep
                            key={step.title}
                            step={step}
                            index={index}
                            onRef={handleRef}
                        />
                    ))}
                </StepList>
            </ProcessoInner>

            <MobileStepWrapper>
                <MobileCarouselViewport>
                    <AnimatePresence custom={direction} initial={false}>
                        <motion.div
                            key={currentStep.title}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                width: '100%',
                            }}
                        >
                            <MobileCarouselInner>
                                <StepPanel>
                                    <StepBody>
                                        <StepTitle>
                                            {currentStep.title}
                                        </StepTitle>
                                        <StepText>{currentStep.text}</StepText>
                                        <StepDelivery>
                                            <StepDeliveryLabel>
                                                Entrega
                                            </StepDeliveryLabel>
                                            <StepDeliveryText>
                                                {currentStep.delivery}
                                            </StepDeliveryText>
                                        </StepDelivery>
                                    </StepBody>
                                </StepPanel>
                            </MobileCarouselInner>
                        </motion.div>
                    </AnimatePresence>

                    <div
                        style={{
                            visibility: 'hidden',
                            pointerEvents: 'none',
                        }}
                        aria-hidden="true"
                    >
                        <MobileCarouselInner>
                            <StepPanel>
                                <StepBody>
                                    <StepTitle>{currentStep.title}</StepTitle>
                                    <StepText>{currentStep.text}</StepText>
                                    <StepDelivery>
                                        <StepDeliveryLabel>
                                            Entrega
                                        </StepDeliveryLabel>
                                        <StepDeliveryText>
                                            {currentStep.delivery}
                                        </StepDeliveryText>
                                    </StepDelivery>
                                </StepBody>
                            </StepPanel>
                        </MobileCarouselInner>
                    </div>
                </MobileCarouselViewport>

                <MobileNav>
                    <MobileNavButton
                        type="button"
                        onClick={goPrev}
                        disabled={mobileIndex === 0}
                        aria-label="Etapa anterior"
                    >
                        <ChevronLeft />
                    </MobileNavButton>

                    <MobileCounter>
                        {String(mobileIndex + 1).padStart(2, '0')}{' '}
                        <span>/ {String(STEPS.length).padStart(2, '0')}</span>
                    </MobileCounter>

                    <MobileNavButton
                        type="button"
                        onClick={goNext}
                        disabled={mobileIndex === STEPS.length - 1}
                        aria-label="Próxima etapa"
                    >
                        <ChevronRight />
                    </MobileNavButton>
                </MobileNav>
            </MobileStepWrapper>
        </ProcessoWrapper>
    );
}

export default Processo;