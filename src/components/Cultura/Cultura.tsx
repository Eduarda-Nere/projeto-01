import { useState, useCallback, useRef, useMemo } from 'react';
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SectionWrap } from '../ui';
import {
    CulturaSection,
    Header,
    Title,
    Subtitle,
    Stage,
    TimelineScale,
    TimelineColumn,
    TimelineCanvas,
    TimelineTrack,
    TimelineProgress,
    TimelinePoints,
    TimelinePoint,
    Dot,
    PointLabel,
    NavBar,
    ArrowButton,
    ContentPanel,
    PanelSizer,
    PanelInner,
    PanelKicker,
    TopicList,
    TopicItem,
    TopicTitle,
    TopicParagraph,
    FooterNote,
} from './Cultura.styles';

type Topic = {
    title: string;
    paragraph: string;
    practice: string;
};

type Pillar = {
    id: string;
    kicker: string;
    short: string;
    topics: Topic[];
};

const PILLARS: Pillar[] = [
    {
        id: 'metodo',
        kicker: 'O método · como pensamos a obra',
        short: 'Método',
        topics: [
            {
                title: 'Simplificação',
                paragraph:
                    'Do simples ao complexo, bem feito. Complexidade é problema mal decomposto. Quebramos a obra até cada parte ser executável sem improviso.',
                practice:
                    'Nenhuma etapa entra em execução sem estar descrita em linguagem que a equipe de campo entende sem intérprete.',
            },
            {
                title: 'Organização e planejamento',
                paragraph:
                    'O trabalho pesado acontece antes da primeira máquina no terreno. Compatibilizar, sequenciar, dimensionar e travar fornecedor é mais barato na mesa do que na obra parada.',
                practice:
                    'Toda obra começa com cronograma físico-financeiro fechado e lista de suprimentos definida, não com a promessa de que serão feitos depois.',
            },
        ],
    },
    {
        id: 'pessoas',
        kicker: 'As pessoas · como trabalhamos juntos',
        short: 'Pessoas',
        topics: [
            {
                title: 'Delegação com autoridade',
                paragraph:
                    'Delegar é entregar a tarefa com informação e autoridade para decidir. Quem está na frente de serviço vê antes e decide antes. Confiança verificada, não hierarquia declarada.',
                practice:
                    'Quem executa conhece o porquê da decisão, não só a ordem, e tem canal direto para interromper o que estiver errado.',
            },
            {
                title: 'Evolução a cada obra',
                paragraph:
                    'Toda obra ensina algo; a que não ensinou foi mal observada. Erro sem aprendizado registrado volta mais caro na obra seguinte.',
                practice:
                    'Toda obra encerra com uma revisão do que atrasou, do que custou mais que o previsto e do que será feito diferente na próxima.',
            },
            {
                title: 'Servir é resolver',
                paragraph:
                    'Atender bem é devolver o problema resolvido, não responder rápido. Coordenar fornecedores e resolver pendências é nossa parte, não do cliente.',
                practice:
                    'Nenhuma pendência de obra é devolvida ao cliente como tarefa — ela chega a ele já com a solução proposta e o custo, para decisão.',
            },
        ],
    },
    {
        id: 'compromisso',
        kicker: 'O compromisso · o que garantimos',
        short: 'Compromisso',
        topics: [
            {
                title: 'Transparência',
                paragraph:
                    'O cliente enxerga o mesmo que nós enxergamos: o avanço real, o custo acumulado e o desvio, quando existe. Notícia ruim não melhora com o tempo. Piora, e chega mais cara.',
                practice:
                    'Relatório periódico com avanço, custo e desvios, entregue mesmo — principalmente — quando o desvio é desfavorável.',
            },
            {
                title: 'Previsibilidade',
                paragraph:
                    'Prazo e custo são compromisso, não estimativa otimista para ganhar a concorrência. É por isso que só assumimos prazo depois do projeto executivo, e não antes.',
                practice:
                    'O que muda depois de assinado só muda por decisão do cliente, registrada por escrito, com o custo dessa mudança na mesma folha.',
            },
            {
                title: 'Segurança',
                paragraph:
                    'Não é meta, indicador nem programa: é a condição para a obra existir. Serviço que não pode ser feito com segurança não é feito — é replanejado.',
                practice:
                    'Qualquer pessoa no canteiro pode parar um serviço inseguro, sem precisar de autorização e sem consequência por ter parado.',
            },
        ],
    },
];

const headerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const headerItem = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
    },
};

const panelVariants = {
    enter: (dir: number) => ({
        opacity: 0,
        y: dir > 0 ? 24 : -24,
        filter: 'blur(6px)',
    }),
    center: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
    },
    exit: (dir: number) => ({
        opacity: 0,
        y: dir > 0 ? -24 : 24,
        filter: 'blur(6px)',
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const },
    }),
};

const topicListVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
};

const topicItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
    },
};

export default function Cultura() {
    const sectionRef = useRef<HTMLElement>(null);

    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const stageScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.97, 1, 0.98]
    );

    const progress = PILLARS.length > 1 ? active / (PILLARS.length - 1) : 0;

    const heaviest = useMemo(
        () =>
            PILLARS.reduce(
                (max, p) => (p.topics.length > max.topics.length ? p : max),
                PILLARS[0]
            ),
        []
    );

    const goTo = useCallback((next: number) => {
        setActive((prev) => {
            if (next === prev) return prev;
            const total = PILLARS.length;
            const forward = (next - prev + total) % total <= total / 2;
            setDirection(forward ? 1 : -1);
            return next;
        });
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setActive((prev) => (prev - 1 + PILLARS.length) % PILLARS.length);
    }, []);

    const handleNext = useCallback(() => {
        setDirection(1);
        setActive((prev) => (prev + 1) % PILLARS.length);
    }, []);

    const current = PILLARS[active];

    return (
        <CulturaSection id="cultura" ref={sectionRef}>
            <SectionWrap>
                <Header
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Title variants={headerItem}>Cultura Lopez</Title>
                    <Subtitle variants={headerItem}>
                        A Cultura Lopez define o que aceitamos e recusamos em cada
                        obra: imprevisto é falha de método, e resultado vem de quem
                        entende o porquê.
                    </Subtitle>
                </Header>

                <Stage>
                    <TimelineScale style={{ scale: stageScale }}>
                        <TimelineColumn>
                            <TimelineCanvas>
                                <TimelineTrack>
                                    <TimelineProgress $progress={progress} />
                                </TimelineTrack>

                                <TimelinePoints>
                                    {PILLARS.map((pillar, i) => {
                                        const isActive = i === active;

                                        return (
                                            <TimelinePoint
                                                key={pillar.id}
                                                $active={isActive}
                                                aria-label={pillar.kicker}
                                                aria-pressed={isActive}
                                                onClick={() => goTo(i)}
                                                whileHover={{ scale: 1.06 }}
                                                whileTap={{ scale: 0.94 }}
                                            >
                                                <Dot
                                                    className="dot"
                                                    $active={isActive}
                                                    layout
                                                />
                                                <PointLabel $active={isActive}>
                                                    {pillar.short}
                                                </PointLabel>
                                            </TimelinePoint>
                                        );
                                    })}
                                </TimelinePoints>
                            </TimelineCanvas>
                        </TimelineColumn>
                    </TimelineScale>

                    <NavBar>
                        <ArrowButton
                            type="button"
                            aria-label="Pilar anterior"
                            onClick={handlePrev}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M15 6 L9 12 L15 18" />
                            </svg>
                        </ArrowButton>

                        <ArrowButton
                            type="button"
                            aria-label="Próximo pilar"
                            onClick={handleNext}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M9 6 L15 12 L9 18" />
                            </svg>
                        </ArrowButton>
                    </NavBar>

                    <ContentPanel>
                        <PanelSizer aria-hidden="true">
                            <PanelKicker>{heaviest.kicker}</PanelKicker>
                            <TopicList as="div">
                                {heaviest.topics.map((topic) => (
                                    <TopicItem key={topic.title}>
                                        <TopicTitle>
                                            {topic.title}
                                        </TopicTitle>
                                        <TopicParagraph>
                                            {topic.paragraph}
                                        </TopicParagraph>
                                        <TopicParagraph>
                                            <strong>Na prática:</strong>{' '}
                                            {topic.practice}
                                        </TopicParagraph>
                                    </TopicItem>
                                ))}
                            </TopicList>
                        </PanelSizer>

                        <AnimatePresence
                            mode="wait"
                            custom={direction}
                            initial={false}
                        >
                            <PanelInner
                                key={current.id}
                                custom={direction}
                                variants={panelVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            >
                                <PanelKicker>{current.kicker}</PanelKicker>

                                <TopicList
                                    variants={topicListVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {current.topics.map((topic) => (
                                        <TopicItem
                                            key={topic.title}
                                            variants={topicItemVariants}
                                        >
                                            <TopicTitle>
                                                {topic.title}
                                            </TopicTitle>
                                            <TopicParagraph>
                                                {topic.paragraph}
                                            </TopicParagraph>
                                            <TopicParagraph>
                                                <strong>Na prática:</strong>{' '}
                                                {topic.practice}
                                            </TopicParagraph>
                                        </TopicItem>
                                    ))}
                                </TopicList>
                            </PanelInner>
                        </AnimatePresence>
                    </ContentPanel>
                </Stage>

                <FooterNote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    <strong>Confiabilidade</strong> não está nesta lista porque não
                    é um princípio: é o que sobra quando todos os outros foram
                    cumpridos até o fim. Nenhuma empresa consegue declarar
                    confiabilidade — só consegue ser encontrada tendo-a.
                </FooterNote>
            </SectionWrap>
        </CulturaSection>
    );
}