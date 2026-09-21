import { useRef, useState } from 'react';
import {
    useScroll,
    useTransform,
    useMotionValueEvent,
    useReducedMotion,
    type MotionValue,
} from 'framer-motion';
import { SectionTitle } from '../ui';
import {
    ProcessoWrapper,
    ProcessoHeader,
    StaticStack,
    StackViewport,
    StackSticky,
    StackFrame,
    Card,
    StepIndicator,
    StepDot,
    GridBackground,
    CardContent,
    CardTitle,
    CardText,
    CardDelivery,
    CardDeliveryLabel,
    CardDeliveryText,
} from './Processo.styles';

const STEPS = [
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

function ProcessoCard({
    step,
    index,
    total,
    scrollYProgress,
    isActive,
    isNext,
}: {
    step: (typeof STEPS)[number];
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
    isActive: boolean;
    isNext: boolean;
}) {
    const isDark = index % 2 === 0;
    const isFirst = index === 0;

    const segment = 1 / total;
    const start = index * segment;
    const edge = segment * 0.8;

    const y = useTransform(
        scrollYProgress,
        isFirst
            ? [0, 0]
            : [start - edge, start],
        isFirst ? ['0%', '0%'] : ['100%', '0%']
    );

    return (
        <Card
            style={{ y }}
            $bg={isDark ? 'dark' : 'light'}
            $index={index}
            $visible={isActive || isNext}
        >
            <GridBackground $isDark={isDark} />
            <CardContent>
                <CardTitle $isDark={isDark}>{step.title}</CardTitle>
                <CardText $isDark={isDark}>{step.text}</CardText>
                <CardDelivery>
                    <CardDeliveryLabel $isDark={isDark}>Entrega</CardDeliveryLabel>
                    <CardDeliveryText $isDark={isDark}>{step.delivery}</CardDeliveryText>
                </CardDelivery>
            </CardContent>
        </Card>
    );
}

function ProcessoStatic() {
    return (
        <StaticStack>
            {STEPS.map((step, index) => {
                const isDark = index % 2 === 0;
                return (
                    <Card
                        key={step.title}
                        as="article"
                        $bg={isDark ? 'dark' : 'light'}
                        $index={index}
                        $static
                    >
                        <GridBackground $isDark={isDark} />
                        <CardContent>
                            <CardTitle $isDark={isDark}>{step.title}</CardTitle>
                            <CardText $isDark={isDark}>{step.text}</CardText>
                            <CardDelivery>
                                <CardDeliveryLabel $isDark={isDark}>Entrega</CardDeliveryLabel>
                                <CardDeliveryText $isDark={isDark}>{step.delivery}</CardDeliveryText>
                            </CardDelivery>
                        </CardContent>
                    </Card>
                );
            })}
        </StaticStack>
    );
}

function ProcessoStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const next = Math.min(STEPS.length - 1, Math.floor(latest * STEPS.length));
        setActiveIndex((current) => (current === next ? current : next));
    });

    const spacerStep = STEPS.reduce((max, step) =>
        step.text.length > max.text.length ? step : max
    , STEPS[0]);

    return (
        <StackViewport ref={containerRef} $count={STEPS.length}>
            <StackSticky>
                <ProcessoHeader>
                    <SectionTitle $maxWidth="20ch" $center>
                        Do simples ao complexo, bem feito.
                    </SectionTitle>
                </ProcessoHeader>

                <StackFrame>
                    <Card
                        aria-hidden="true"
                        $bg="light"
                        $index={-1}
                        $spacer
                    >
                        <CardContent>
                            <CardTitle $isDark={false}>{spacerStep.title}</CardTitle>
                            <CardText $isDark={false}>{spacerStep.text}</CardText>
                            <CardDelivery>
                                <CardDeliveryLabel $isDark={false}>Entrega</CardDeliveryLabel>
                                <CardDeliveryText $isDark={false}>{spacerStep.delivery}</CardDeliveryText>
                            </CardDelivery>
                        </CardContent>
                    </Card>

                    {STEPS.map((step, index) => (
                        <ProcessoCard
                            key={step.title}
                            step={step}
                            index={index}
                            total={STEPS.length}
                            scrollYProgress={scrollYProgress}
                            isActive={index === activeIndex}
                            isNext={index === activeIndex + 1}
                        />
                    ))}
                </StackFrame>

                <StepIndicator aria-hidden="true">
                    {STEPS.map((step, index) => (
                        <StepDot key={step.title} $active={index === activeIndex} />
                    ))}
                </StepIndicator>
            </StackSticky>
        </StackViewport>
    );
}

function Processo() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <ProcessoWrapper id="processo">
            {prefersReducedMotion ? (
                <>
                    <ProcessoHeader>
                        <SectionTitle $maxWidth="20ch" $center>
                            Do simples ao complexo, bem feito.
                        </SectionTitle>
                    </ProcessoHeader>
                    <ProcessoStatic />
                </>
            ) : (
                <ProcessoStack />
            )}
        </ProcessoWrapper>
    );
}

export default Processo;