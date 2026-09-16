import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SectionWrap } from '../ui';
import projetosImg from '../../assets/img/projetos.jpg';
import {
    ProjectsSection,
    ProjectsHeader,
    ProjectsTitle,
    ProjectsTabs,
    ProjectsTab,
    ProjectsTabKicker,
    ProjectsDropdown,
    ProjectsDropdownWrapper,
    ProjectsDropdownTrigger,
    ProjectsDropdownChevron,
    ProjectsDropdownMenu,
    ProjectsDropdownOption,
    ProjectsStage,
    ProjectsImageColumn,
    ProjectsImage,
    ProjectsContentPanel,
    ProjectsPanelSizer,
    ProjectsPanelInner,
    ProjectsPanelSubtitle,
    ProjectsStatsRow,
    ProjectsStat,
    ProjectsStatValue,
    ProjectsStatLabel,
    ProjectsPanelDescription,
    ProjectsPanelParagraph,
    ProjectsPanelList,
    ProjectsPanelListItem,
} from './Projects.styles';

type ProjectStat = {
    value: string;
    label: string;
};

type ProjectBlock =
    | { type: 'paragraph'; content: React.ReactNode }
    | { type: 'list'; items: React.ReactNode[] };

type ProjectPillar = {
    id: string;
    kicker: string;
    short: string;
    subtitle: string;
    blocks: ProjectBlock[];
    stats: ProjectStat[];
};

const PROJECT_PILLARS: ProjectPillar[] = [
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
                        Lote de{' '}
                        <strong>8 m de testada por 20 m de profundidade</strong>{' '}
                        — 160 m² —, com garagem, loja e edícula disputando a
                        mesma faixa de acesso.
                    </>
                ),
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        A solução foi fazer essa faixa de{' '}
                        <strong>2,90 m</strong> trabalhar duas vezes:
                    </>
                ),
            },
            {
                type: 'list',
                items: [
                    <>
                        O carro ocupa os primeiros <strong>5,50 m</strong> e
                        sobra <strong>1,05 m</strong> de passagem livre ao lado
                        dele;
                    </>,
                    <>
                        Na chegada à edícula, a faixa estreita para{' '}
                        <strong>2,00 m</strong>, onde a escada de{' '}
                        <strong>1,00 m</strong> ainda deixa{' '}
                        <strong>1,00 m</strong> de circulação.
                    </>,
                ],
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        A loja de <strong>42,84 m²</strong> ficou desenhada como
                        reserva de área para uma segunda etapa, sem travar a
                        primeira. Taxa de ocupação final:{' '}
                        <strong>67,12%</strong>, com o limite municipal em 70%.
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
                        Terreno de <strong>8 × 25 metros</strong> no Loteamento
                        Parque Residencial Santa Rita, em Capivari — proporção em
                        que o corredor de circulação costuma comer a área útil.
                    </>
                ),
            },
            {
                type: 'paragraph',
                content: (
                    <>
                        A planta <strong>dispensa o corredor</strong> e organiza
                        o programa inteiro em profundidade:
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
                        O resultado é um programa completo em{' '}
                        <strong>pavimento único</strong>, com{' '}
                        <strong>3,00 m de área livre</strong> preservados nos
                        fundos em vez de um quintal espremido.
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

function Projects() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const heaviest = useMemo(
        () =>
            PROJECT_PILLARS.reduce(
                (max, p) => (p.blocks.length > max.blocks.length ? p : max),
                PROJECT_PILLARS[0]
            ),
        []
    );

    const goTo = useCallback((next: number) => {
        setActive((prev) => {
            if (next === prev) return prev;
            setDirection(next > prev ? 1 : -1);
            return next;
        });
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

    const handleOptionClick = (i: number) => {
        goTo(i);
        setDropdownOpen(false);
    };

    const current = PROJECT_PILLARS[active];

    const renderPanelContent = (pillar: ProjectPillar) => (
        <>
            <ProjectsPanelSubtitle>
                {pillar.subtitle}
            </ProjectsPanelSubtitle>

            <ProjectsStatsRow>
                {pillar.stats.map((stat) => (
                    <ProjectsStat key={stat.label}>
                        <ProjectsStatValue>
                            {stat.value}
                        </ProjectsStatValue>
                        <ProjectsStatLabel>
                            {stat.label}
                        </ProjectsStatLabel>
                    </ProjectsStat>
                ))}
            </ProjectsStatsRow>

            <ProjectsPanelDescription>
                {pillar.blocks.map((block, i) =>
                    block.type === 'paragraph' ? (
                        <ProjectsPanelParagraph key={i}>
                            {block.content}
                        </ProjectsPanelParagraph>
                    ) : (
                        <ProjectsPanelList key={i}>
                            {block.items.map((item, j) => (
                                <ProjectsPanelListItem key={j}>
                                    {item}
                                </ProjectsPanelListItem>
                            ))}
                        </ProjectsPanelList>
                    )
                )}
            </ProjectsPanelDescription>
        </>
    );

    return (
        <ProjectsSection id="projetos">
            <SectionWrap>
                <ProjectsHeader
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <ProjectsTitle variants={headerItem}>
                        Cada obra começou num terreno real. Aqui está o que
                        estava em jogo, a decisão tomada e o resultado.
                    </ProjectsTitle>
                </ProjectsHeader>

                <ProjectsTabs
                    variants={tabsContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {PROJECT_PILLARS.map((pillar, i) => {
                        const isActive = i === active;

                        return (
                            <ProjectsTab
                                key={pillar.id}
                                type="button"
                                $active={isActive}
                                variants={tabItem}
                                onClick={() => goTo(i)}
                                aria-pressed={isActive}
                                aria-label={pillar.kicker}
                                whileTap={{ scale: 0.97 }}
                            >
                                <ProjectsTabKicker $active={isActive}>
                                    {pillar.kicker}
                                </ProjectsTabKicker>
                            </ProjectsTab>
                        );
                    })}
                </ProjectsTabs>

                <ProjectsDropdown
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                >
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
                                    {PROJECT_PILLARS.map((pillar, i) => {
                                        const isActive = i === active;

                                        return (
                                            <ProjectsDropdownOption
                                                key={pillar.id}
                                                role="option"
                                                aria-selected={isActive}
                                                $active={isActive}
                                                onClick={() =>
                                                    handleOptionClick(i)
                                                }
                                            >
                                                {pillar.kicker}
                                            </ProjectsDropdownOption>
                                        );
                                    })}
                                </ProjectsDropdownMenu>
                            )}
                        </AnimatePresence>
                    </ProjectsDropdownWrapper>
                </ProjectsDropdown>

                <ProjectsStage>
                    <ProjectsImageColumn>
                        <ProjectsImage>
                            <img
                                src={projetosImg}
                                alt="Planta do projeto"
                            />
                        </ProjectsImage>
                    </ProjectsImageColumn>

                    <ProjectsContentPanel>
                        <ProjectsPanelSizer aria-hidden="true">
                            {renderPanelContent(heaviest)}
                        </ProjectsPanelSizer>

                        <AnimatePresence
                            mode="wait"
                            custom={direction}
                            initial={false}
                        >
                            <ProjectsPanelInner
                                key={current.id}
                                custom={direction}
                                variants={panelVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            >
                                {renderPanelContent(current)}
                            </ProjectsPanelInner>
                        </AnimatePresence>
                    </ProjectsContentPanel>
                </ProjectsStage>
            </SectionWrap>
        </ProjectsSection>
    );
}

export default Projects;