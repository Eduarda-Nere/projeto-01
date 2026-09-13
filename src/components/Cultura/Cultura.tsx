import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { SectionWrap } from '../ui';
import {
    CulturaSection,
    Header,
    Title,
    Subtitle,
    PillarList,
    PillarRow,
    RowMain,
    RowKicker,
    RowTitleGroup,
    RowTitle,
    RowTeaser,
    RowAction,
    FooterNote,
    ModalOverlay,
    ModalPanel,
    ModalClose,
    ModalKicker,
    ModalTitle,
    TopicList,
    TopicItem,
    TopicTitle,
    TopicParagraph,
} from './Cultura.styles';

type Topic = {
    title: string;
    paragraph: string;
    practice: string;
};

type Pillar = {
    id: string;
    kicker: string;
    title: string;
    topicsLabel: string;
    topics: Topic[];
};

const PILLARS: Pillar[] = [
    {
        id: 'metodo',
        kicker: 'Como pensamos a obra',
        title: 'Método',
        topicsLabel: 'Simplificação, Organização e Planejamento',
        topics: [
            {
                title: 'Simplificação',
                paragraph:
                    'Do simples ao complexo, bem feito. Complexidade é problema mal decomposto. Quebramos a obra até cada parte ser executável sem improviso.',
                practice:
                    'Nenhuma etapa entra em execução sem estar descrita em linguagem que a equipe de campo entende sem intérprete.',
            },
            {
                title: 'Organização e Planejamento',
                paragraph:
                    'O trabalho pesado acontece antes da primeira máquina no terreno. Compatibilizar, sequenciar, dimensionar e travar fornecedor é mais barato na mesa do que na obra parada.',
                practice:
                    'Toda obra começa com cronograma físico-financeiro fechado e lista de suprimentos definida, não com a promessa de que serão feitos depois.',
            },
        ],
    },
    {
        id: 'pessoas',
        kicker: 'Como trabalhamos juntos',
        title: 'Pessoas',
        topicsLabel:
            'Delegação com autoridade, Evolução a cada obra e Servir é resolver',
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
        kicker: 'O que garantimos',
        title: 'Compromisso',
        topicsLabel: 'Transparência, Previsibilidade e Segurança',
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

const EASE = [0.23, 1, 0.32, 1] as const;

const listContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rowVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function Cultura() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const activePillar = PILLARS.find((pillar) => pillar.id === activeId) ?? null;
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (activeId === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setActiveId(null);
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        window.__lenis?.stop();

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            window.__lenis?.start();
        };
    }, [activeId]);

    return (
        <>
            <CulturaSection id="cultura">
                <SectionWrap>
                    <Header
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: EASE }}
                    >
                        <Title>Cultura Lopez</Title>
                        <Subtitle>
                            A Cultura Lopez define o que aceitamos e recusamos
                            em cada obra: imprevisto é falha de método, e
                            resultado vem de quem entende o porquê.
                        </Subtitle>
                    </Header>

                    <PillarList
                        variants={listContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {PILLARS.map((pillar) => (
                            <PillarRow
                                key={pillar.id}
                                variants={rowVariants}
                                onClick={() => setActiveId(pillar.id)}
                                whileHover={
                                    prefersReducedMotion ? undefined : 'hover'
                                }
                                whileTap={
                                    prefersReducedMotion
                                        ? undefined
                                        : { opacity: 0.6 }
                                }
                                initial="rest"
                            >
                                <RowMain>
                                    <RowKicker
                                        variants={{
                                            rest: { color: '#d2aa4e' },
                                            hover: { x: 4 },
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: EASE,
                                        }}
                                    >
                                        {pillar.kicker}
                                    </RowKicker>
                                    <RowTitleGroup>
                                        <RowTitle
                                            variants={{
                                                rest: { x: 0 },
                                                hover: { x: 8 },
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: EASE,
                                            }}
                                        >
                                            {pillar.title}
                                        </RowTitle>
                                        <RowTeaser
                                            variants={{
                                                rest: { x: 0 },
                                                hover: { x: 8 },
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: EASE,
                                            }}
                                        >
                                            {pillar.topicsLabel}
                                        </RowTeaser>
                                    </RowTitleGroup>
                                </RowMain>

                                <RowAction
                                    aria-hidden="true"
                                    variants={{
                                        rest: { rotate: 0 },
                                        hover: { rotate: 45 },
                                    }}
                                    transition={{ duration: 0.4, ease: EASE }}
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </RowAction>
                            </PillarRow>
                        ))}
                    </PillarList>

                    <FooterNote
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.8, ease: EASE }}
                    >
                        <strong>Confiabilidade</strong> não está nesta lista
                        porque não é um princípio: é o que sobra quando todos os
                        outros foram cumpridos até o fim. Nenhuma empresa
                        consegue declarar confiabilidade — só consegue ser
                        encontrada tendo-a.
                    </FooterNote>
                </SectionWrap>
            </CulturaSection>

            {createPortal(
                <AnimatePresence>
                    {activePillar && (
                        <ModalOverlay
                            onClick={() => setActiveId(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                        >
                            <ModalPanel
                                data-lenis-prevent
                                role="dialog"
                                aria-modal="true"
                                aria-label={activePillar.title}
                                onClick={(event) => event.stopPropagation()}
                                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: EASE }}
                            >
                                <ModalClose
                                    onClick={() => setActiveId(null)}
                                    aria-label="Fechar"
                                >
                                    ×
                                </ModalClose>

                                <ModalKicker>
                                    {activePillar.kicker}
                                </ModalKicker>
                                <ModalTitle>
                                    {activePillar.title}
                                </ModalTitle>

                                <TopicList>
                                    {activePillar.topics.map((topic) => (
                                        <TopicItem key={topic.title}>
                                            <TopicTitle>
                                                {topic.title}
                                            </TopicTitle>
                                            <TopicParagraph>
                                                {topic.paragraph}
                                            </TopicParagraph>
                                            <TopicParagraph>
                                                <strong>
                                                    Na prática:
                                                </strong>{' '}
                                                {topic.practice}
                                            </TopicParagraph>
                                        </TopicItem>
                                    ))}
                                </TopicList>
                            </ModalPanel>
                        </ModalOverlay>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}

export default Cultura;