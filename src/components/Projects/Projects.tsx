import { useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    SectionWrap,
    SectionTitle,
    SectionSubtitle,
    GoldList,
    GoldListItem,
} from '../ui';
import {
    ProjectsSection,
    ProjectsHeader,
    ProjectsTabs,
    ProjectsTab,
    ProjectsTabKicker,
    ProjectsDropdownWrapper,
    ProjectsDropdownTrigger,
    ProjectsDropdownChevron,
    ProjectsDropdownMenu,
    ProjectsDropdownOption,
    ProjectsStage,
    ProjectsCard,
    ProjectsCardMain,
    ProjectsCardSubtitle,
    ProjectsCardDescription,
    ProjectsCardParagraph,
    ProjectsCardStats,
    ProjectsCardStat,
    ProjectsCardStatValue,
    ProjectsCardStatLabel,
} from './Projects.styles';

type ProjectStat = {
    value: string;
    label: string;
};

type ProjectBlock =
    | { type: 'paragraph'; content: React.ReactNode }
    | { type: 'list'; items: React.ReactNode[] };

type Project = {
    id: string;
    kicker: string;
    short: string;
    subtitle: string;
    blocks: ProjectBlock[];
    stats: ProjectStat[];
};

const PROJECTS: Project[] = [
    {
        id: 'renan',
        kicker: 'RESIDENCIAL - CASA RENAN',
        short: 'Casa Renan',
        subtitle: 'Três programas na mesma testada de 8 metros',
        blocks: [
            {
                type: 'paragraph',
                content: (
                    <>
                        Lote de 8 m de testada por 20 m de profundidade (160
                        m²), com garagem, loja e edícula disputando a mesma
                        faixa de acesso.
                    </>
                ),
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        A solução foi fazer essa faixa de 2,90 m trabalhar duas
                        vezes:
                    </>
                ),
            },
            {
                type: 'list',
                items: [
                    <>
                        O carro ocupa os primeiros 5,50 m e sobra 1,05 m de
                        passagem livre ao lado dele;
                    </>,
                    <>
                        Na chegada à edícula, a faixa estreita para 2,00 m,
                        onde a escada de 1,00 m ainda deixa 1,00 m de
                        circulação.
                    </>,
                ],
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        A loja de 42,84 m² ficou desenhada como reserva de área
                        para uma segunda etapa, sem travar a primeira. Taxa de
                        ocupação final: 67,12%, com o limite municipal em 70%.
                    </>
                ),
            },
        ],
        stats: [
            { value: '8×20m', label: 'LOTE' },
            { value: '67,12%', label: 'OCUPAÇÃO' },
            { value: '3', label: 'ETAPAS' },
        ],
    },
    {
        id: 'mauricio',
        kicker: 'RESIDENCIAL - CASA MAURÍCIO',
        short: 'Casa Maurício',
        subtitle:
            'Programa completo sem corredor, em lote 3× mais fundo que largo',
        blocks: [
            {
                type: 'paragraph',
                content: (
                    <>
                        Terreno de 8 × 25 metros no Loteamento Parque
                        Residencial Santa Rita, em Capivari — proporção em que o
                        corredor de circulação costuma comer a área útil.
                    </>
                ),
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        A planta dispensa o corredor e organiza o programa
                        inteiro em profundidade:
                    </>
                ),
            },
            {
                type: 'list',
                items: [
                    <>
                        <strong>Frente:</strong> garagem, depósito e lavabo;
                    </>,
                    <>
                        <strong>Miolo:</strong> cozinha e sala;
                    </>,
                    <>
                        <strong>Fundos:</strong> suíte master, banheiro e
                        lavanderia.
                    </>,
                ],
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        O resultado é um programa completo em pavimento único,
                        com 3,00 m de área livre preservados nos fundos em vez
                        de um quintal espremido.
                    </>
                ),
            },
        ],
        stats: [
            { value: '8×25m', label: 'LOTE' },
            { value: '1', label: 'PAVIMENTO' },
            { value: '3,00m', label: 'ÁREA LIVRE' },
        ],
    },
    {
        id: 'lorem',
        kicker: 'LOREM - IPSUM',
        short: 'Lorem',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        blocks: [
            {
                type: 'paragraph',
                content: (
                    <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </>
                ),
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                    </>
                ),
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </>
                ),
            },
        ],
        stats: [
            { value: '0', label: 'LOREM' },
            { value: '0', label: 'IPSUM' },
            { value: '0', label: 'DOLOR' },
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

const tabsContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
};

const tabItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
    },
};

const panelVariants = {
    enter: (dir: number) => ({
        opacity: 0,
        y: dir > 0 ? 20 : -20,
    }),
    center: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
    },
    exit: (dir: number) => ({
        opacity: 0,
        y: dir > 0 ? -20 : 20,
        transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as const },
    }),
};

function ProjectBlocks({ blocks }: { blocks: ProjectBlock[] }) {
    return (
        <ProjectsCardDescription>
            {blocks.map((block, i) =>
                block.type === 'paragraph' ? (
                    <ProjectsCardParagraph key={i}>
                        {block.content}
                    </ProjectsCardParagraph>
                ) : (
                    <GoldList key={i}>
                        {block.items.map((item, j) => (
                            <GoldListItem key={j}>{item}</GoldListItem>
                        ))}
                    </GoldList>
                )
            )}
        </ProjectsCardDescription>
    );
}

function Projects() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const goTo = useCallback((next: number) => {
        setActive((prev) => {
            if (next === prev) return prev;
            setDirection(next > prev ? 1 : -1);
            return next;
        });
        setDropdownOpen(false);
    }, []);

    useEffect(() => {
        if (!dropdownOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setDropdownOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [dropdownOpen]);

    const current = PROJECTS[active];

    return (
        <ProjectsSection id="projetos">
            <SectionWrap>
                <ProjectsHeader
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <SectionTitle
                        as={motion.h2}
                        $maxWidth="28ch"
                        $center
                        variants={headerItem}
                    >
                        Projetos Entregues
                    </SectionTitle>
                    <SectionSubtitle
                        as={motion.p}
                        $maxWidth="60ch"
                        variants={headerItem}
                        style={{ margin: '1rem auto 0' }}
                    >
                        Cada obra começou num terreno real. Aqui está o que
                        estava em jogo, a decisão tomada e o resultado.
                    </SectionSubtitle>
                </ProjectsHeader>

                <ProjectsTabs
                    variants={tabsContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {PROJECTS.map((project, i) => {
                        const isActive = i === active;

                        return (
                            <ProjectsTab
                                key={project.id}
                                type="button"
                                $active={isActive}
                                variants={tabItem}
                                onClick={() => goTo(i)}
                                aria-pressed={isActive}
                                aria-label={project.kicker}
                                whileTap={{ scale: 0.97 }}
                            >
                                <ProjectsTabKicker $active={isActive}>
                                    {project.kicker}
                                </ProjectsTabKicker>
                            </ProjectsTab>
                        );
                    })}
                </ProjectsTabs>

                <ProjectsDropdownWrapper ref={dropdownRef}>
                    <ProjectsDropdownTrigger
                        type="button"
                        onClick={() => setDropdownOpen((v) => !v)}
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                    >
                        <span>{current.kicker}</span>
                        <ProjectsDropdownChevron
                            $open={dropdownOpen}
                            aria-hidden="true"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </ProjectsDropdownChevron>
                    </ProjectsDropdownTrigger>

                    <AnimatePresence>
                        {dropdownOpen && (
                            <ProjectsDropdownMenu
                                role="listbox"
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{
                                    duration: 0.2,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                            >
                                {PROJECTS.map((project, i) => {
                                    const isActive = i === active;

                                    return (
                                        <ProjectsDropdownOption
                                            key={project.id}
                                            role="option"
                                            aria-selected={isActive}
                                            $active={isActive}
                                            onClick={() => goTo(i)}
                                        >
                                            {project.kicker}
                                        </ProjectsDropdownOption>
                                    );
                                })}
                            </ProjectsDropdownMenu>
                        )}
                    </AnimatePresence>
                </ProjectsDropdownWrapper>

                <ProjectsStage>
                    <AnimatePresence
                        mode="wait"
                        custom={direction}
                        initial={false}
                    >
                        <ProjectsCard
                            key={current.id}
                            custom={direction}
                            variants={panelVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <ProjectsCardMain>
                                <ProjectsCardSubtitle>
                                    {current.subtitle}
                                </ProjectsCardSubtitle>

                                <ProjectBlocks blocks={current.blocks} />
                            </ProjectsCardMain>

                            <ProjectsCardStats>
                                {current.stats.map((stat) => (
                                    <ProjectsCardStat key={stat.label}>
                                        <ProjectsCardStatValue>
                                            {stat.value}
                                        </ProjectsCardStatValue>
                                        <ProjectsCardStatLabel>
                                            {stat.label}
                                        </ProjectsCardStatLabel>
                                    </ProjectsCardStat>
                                ))}
                            </ProjectsCardStats>
                        </ProjectsCard>
                    </AnimatePresence>
                </ProjectsStage>
            </SectionWrap>
        </ProjectsSection>
    );
}

export default Projects;