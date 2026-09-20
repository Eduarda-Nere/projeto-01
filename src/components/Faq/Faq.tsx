import { useState } from 'react';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { SectionWrap, SectionHead, SectionTitle, GoldList, GoldListItem } from '../ui';
import {
    FaqSection,
    FaqList,
    FaqItem,
    FaqQuestion,
    FaqIcon,
    FaqAnswer,
    FaqAnswerContent,
    FaqAnswerText,
} from './Faq.styles';

type FaqBlock =
    | { type: 'paragraph'; content: string }
    | { type: 'list'; items: string[] };

type FaqEntry = {
    question: string;
    answer: FaqBlock[];
};

const FAQ_ITEMS: FaqEntry[] = [
    {
        question: 'Quais serviços a empresa oferece?',
        answer: [
            {
                type: 'paragraph',
                content:
                    'O ciclo completo, e também partes dele. Estudo de viabilidade, projeto arquitetônico, estrutural e de instalações, compatibilização, regularização e aprovação em prefeitura, gerenciamento e execução de obra, até a entrega da chave. Atendemos obras residenciais, comerciais e industriais.',
            },
            {
                type: 'paragraph',
                content:
                    'Se você já tem projeto pronto e quer só a execução, também assumimos - o escopo é fechado por escrito antes de começar, com o que está e o que não está incluído.',
            },
        ],
    },
    {
        question: 'O que muda contratando projeto e obra na mesma empresa?',
        answer: [
            {
                type: 'paragraph',
                content:
                    'Muda quem responde quando algo dá errado. No modelo tradicional, o projetista culpa a execução, o construtor culpa o projeto, e o custo do impasse é do cliente.',
            },
            {
                type: 'paragraph',
                content:
                    'Com escopo completo há um contrato, um cronograma e um interlocutor: a interferência entre estrutura e instalação é resolvida na prancheta, não na parede pronta; o orçamento é fechado sobre o projeto que nós mesmos vamos executar; e o prazo não tem fronteira para escorregar. É a diferença entre coordenar fornecedores e contratar um resultado.',
            },
        ],
    },
    {
        question: 'Como funciona o orçamento?',
        answer: [
            { type: 'paragraph', content: 'Sem custo, em três passos:' },
            {
                type: 'list',
                items: [
                    'Conversa por WhatsApp ou telefone para entender o que você quer construir e onde.',
                    'Visita ao local, com checagem do zoneamento, dos recuos e da taxa de ocupação permitidos naquele lote - ainda antes de qualquer desenho.',
                    'Proposta escrita com escopo, prazo e valor. Nenhum item aparece na obra sem ter aparecido antes na proposta.',
                ],
            },
        ],
    },
    {
        question: 'Quanto custa?',
        answer: [
            {
                type: 'paragraph',
                content:
                    'Projeto é calculado por área construída e complexidade. Obra completa é orçada sobre o projeto executivo, com composição de custos aberta - você vê a linha, não só o total.',
            },
            {
                type: 'paragraph',
                content:
                    'Taxas de órgãos públicos e laudos entram pelo valor exato, discriminados. O número é fechado antes de você assinar, e o que muda depois só muda por decisão sua, registrada por escrito, com o custo da mudança na mesma folha.',
            },
        ],
    },
    {
        question: 'Vocês atendem a minha região?',
        answer: [
            {
                type: 'paragraph',
                content:
                    'Atuamos em Piracicaba, Capivari e região, e avaliamos obras fora desse raio caso a caso, conforme o porte e a duração. Obra com escopo completo exige presença constante - e preferimos recusar a atender mal.',
            },
        ],
    },
];

function Faq() {
    const { ref: headRef, inView: headInView } = useInViewOnce<HTMLDivElement>();
    const { ref: listRef, inView: listInView } = useInViewOnce<HTMLDivElement>();

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    const renderBlock = (block: FaqBlock, blockIndex: number) => {
        if (block.type === 'list') {
            return (
                <GoldList key={blockIndex}>
                    {block.items.map((item, itemIndex) => (
                        <GoldListItem key={itemIndex}>{item}</GoldListItem>
                    ))}
                </GoldList>
            );
        }

        return <FaqAnswerText key={blockIndex}>{block.content}</FaqAnswerText>;
    };

    return (
        <FaqSection id="faq">
            <SectionWrap>
                <div ref={headRef}>
                    <SectionHead visible={headInView}>
                        <SectionTitle>Perguntas Frequentes</SectionTitle>
                    </SectionHead>
                </div>

                <FaqList ref={listRef} $visible={listInView}>
                    {FAQ_ITEMS.map((item, index) => {
                        const isOpen = openIndex === index;
                        const panelId = `faq-panel-${index}`;
                        const buttonId = `faq-button-${index}`;

                        return (
                            <FaqItem key={item.question}>
                                <FaqQuestion
                                    id={buttonId}
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => toggle(index)}
                                >
                                    {item.question}
                                    <FaqIcon $open={isOpen} aria-hidden="true">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </FaqIcon>
                                </FaqQuestion>

                                <FaqAnswer
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    $open={isOpen}
                                >
                                    <FaqAnswerContent>
                                        {item.answer.map((block, blockIndex) =>
                                            renderBlock(block, blockIndex)
                                        )}
                                    </FaqAnswerContent>
                                </FaqAnswer>
                            </FaqItem>
                        );
                    })}
                </FaqList>
            </SectionWrap>
        </FaqSection>
    );
}

export default Faq;