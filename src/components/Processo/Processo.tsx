import { useState } from 'react';
import {
    ProcessoWrapper,
    ProcessoInner,
    ProcessoLeft,
    ProcessoRight,
    Subtitle,
    Stepper,
    StepperTrack,
    StepperProgress,
    StepperItem,
    StepperCircle,
    StepPanel,
    StepTrack,
    StepSlide,
    StepTitle,
    StepText,
    StepDelivery,
    StepDeliveryLabel,
    StepDeliveryText,
    StepFooter,
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

function Processo() {
    const [active, setActive] = useState(0);
    const total = STEPS.length;

    const prev = () => setActive((i) => Math.max(0, i - 1));
    const next = () => setActive((i) => Math.min(total - 1, i + 1));

    const progress = total > 1 ? (active / (total - 1)) * 100 : 0;

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
                </ProcessoLeft>

                <ProcessoRight>
                    <Stepper role="tablist" aria-label="Etapas do processo">
                        <StepperTrack>
                            <StepperProgress style={{ width: `${progress}%` }} />
                        </StepperTrack>

                        {STEPS.map((step, index) => {
                            const isActive = index === active;
                            const isDone = index < active;

                            return (
                                <StepperItem key={step.title}>
                                    <StepperCircle
                                        as="button"
                                        type="button"
                                        $active={isActive}
                                        $done={isDone}
                                        onClick={() => setActive(index)}
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-label={`Ir para etapa ${index + 1}: ${step.title}`}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </StepperCircle>
                                </StepperItem>
                            );
                        })}
                    </Stepper>

                    <StepPanel>
                        <StepTrack $offset={active}>
                            {STEPS.map((step) => (
                                <StepSlide key={step.title}>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepText>{step.text}</StepText>
                                    <StepDelivery>
                                        <StepDeliveryLabel>
                                            Entrega
                                        </StepDeliveryLabel>
                                        <StepDeliveryText>
                                            {step.delivery}
                                        </StepDeliveryText>
                                    </StepDelivery>
                                </StepSlide>
                            ))}
                        </StepTrack>
                    </StepPanel>

                    <StepFooter>
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
                    </StepFooter>
                </ProcessoRight>
            </ProcessoInner>
        </ProcessoWrapper>
    );
}

export default Processo;