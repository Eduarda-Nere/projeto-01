import { useState } from 'react';
import {
    ProcessoWrapper,
    ProcessoInner,
    ProcessoLeft,
    Subtitle,
    ProcessoRight,
    CardViewport,
    CardTrack,
    Card,
    GridBackground,
    CardContent,
    CardTitle,
    CardText,
    CardDelivery,
    CardDeliveryLabel,
    CardDeliveryText,
    CardFooter,
    Indicators,
    Indicator,
    Arrows,
    Arrow,
} from './Processo.styles';
import { SectionTitle } from '../ui';

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

function ProcessoCard({ data, isDark }: { data: Step; isDark: boolean }) {
    return (
        <Card $bg={isDark ? 'dark' : 'light'}>
            <GridBackground $isDark={isDark} />

            <CardContent>
                <CardTitle $isDark={isDark}>{data.title}</CardTitle>
                <CardText $isDark={isDark}>{data.text}</CardText>
            </CardContent>

            <CardDelivery>
                <CardDeliveryLabel $isDark={isDark}>
                    Entrega
                </CardDeliveryLabel>
                <CardDeliveryText $isDark={isDark}>
                    {data.delivery}
                </CardDeliveryText>
            </CardDelivery>
        </Card>
    );
}

function Processo() {
    const [active, setActive] = useState(0);
    const total = STEPS.length;

    const prev = () => setActive((i) => Math.max(0, i - 1));
    const next = () => setActive((i) => Math.min(total - 1, i + 1));

    return (
        <ProcessoWrapper id="processo">
            <ProcessoInner>
                <ProcessoLeft>
                    <SectionTitle $maxWidth="23ch">
                        Do simples ao complexo, bem feito.
                    </SectionTitle>
                    <Subtitle>
                        Quatro etapas, um contrato. Cada uma entrega algo
                        concreto antes da próxima começar - sem etapa pulada,
                        sem retrabalho.
                    </Subtitle>
                </ProcessoLeft>

                <ProcessoRight>
                    <CardViewport>
                        <CardTrack
                            animate={{ x: `${-active * 100}%` }}
                            transition={{
                                duration: 0.6,
                                ease: [0.23, 1, 0.32, 1],
                            }}
                        >
                            {STEPS.map((item, index) => (
                                <ProcessoCard
                                    key={item.title}
                                    data={item}
                                    isDark={index % 2 === 0}
                                />
                            ))}
                        </CardTrack>
                    </CardViewport>

                    <CardFooter>
                        <Indicators aria-hidden="true">
                            {STEPS.map((item, index) => (
                                <Indicator
                                    key={item.title}
                                    $active={index === active}
                                />
                            ))}
                        </Indicators>

                        <Arrows>
                            <Arrow
                                type="button"
                                onClick={prev}
                                disabled={active === 0}
                                aria-label="Etapa anterior"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </Arrow>
                            <Arrow
                                type="button"
                                onClick={next}
                                disabled={active === total - 1}
                                aria-label="Próxima etapa"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </Arrow>
                        </Arrows>
                    </CardFooter>
                </ProcessoRight>
            </ProcessoInner>
        </ProcessoWrapper>
    );
}

export default Processo;