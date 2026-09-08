import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import {
    FaqSection,
    Wrap,
    SectionHeadCenter,
    Title,
    FaqList,
    FaqItem,
    FaqQuestion,
    FaqIcon,
    FaqAnswer,
    FaqAnswerContent,
    FaqAnswerText,
    FaqListPoint,
    FaqListItem,
} from './Faq.styles';

const FAQ_ITEMS = [
    { 
        question: 'Quais serviços a empresa oferece?', 
        answer: 'O ciclo completo, e também partes dele. Estudo de viabilidade, projeto arquitetônico, estrutural e de instalações, compatibilização, regularização e aprovação em prefeitura, gerenciamento e execução de obra, até a entrega da chave. Atendemos obras residenciais, comerciais e industriais.\n\nSe você já tem projeto pronto e quer só a execução, também assumimos — o escopo é fechado por escrito antes de começar, com o que está e o que não está incluído.' 
    },
    { 
        question: 'O que muda contratando projeto e obra na mesma empresa?', 
        answer: 'Muda quem responde quando algo dá errado. No modelo tradicional, o projetista culpa a execução, o construtor culpa o projeto, e o custo do impasse é do cliente.\n\nCom escopo completo há um contrato, um cronograma e um interlocutor: a interferência entre estrutura e instalação é resolvida na prancheta, não na parede pronta; o orçamento é fechado sobre o projeto que nós mesmos vamos executar; e o prazo não tem fronteira para escorregar. É a diferença entre coordenar fornecedores e contratar um resultado.' 
    },
    { 
        question: 'Como funciona o orçamento?', 
        answer: 'Sem custo, em três passos:\n\n• Conversa por WhatsApp ou telefone para entender o que você quer construir e onde.\n• Visita ao local, com checagem do zoneamento, dos recuos e da taxa de ocupação permitidos naquele lote — ainda antes de qualquer desenho.\n• Proposta escrita com escopo, prazo e valor. Nenhum item aparece na obra sem ter aparecido antes na proposta.' 
    },
    { 
        question: 'Quanto custa?', 
        answer: 'Projeto é calculado por área construída e complexidade. Obra completa é orçada sobre o projeto executivo, com composição de custos aberta — você vê a linha, não só o total.\n\nTaxas de órgãos públicos e laudos entram pelo valor exato, discriminados. O número é fechado antes de você assinar, e o que muda depois só muda por decisão sua, registrada por escrito, com o custo da mudança na mesma folha.' 
    },
    { 
        question: 'Vocês atendem a minha região?', 
        answer: 'Atuamos em Piracicaba, Capivari e região, e avaliamos obras fora desse raio caso a caso, conforme o porte e a duração. Obra com escopo completo exige presença constante — e preferimos recusar a atender mal.' 
    },
];

function Faq() {
    const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
    const { ref: listRef, inView: listInView } = useInView<HTMLDivElement>();

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    const renderAnswer = (text: string) => {
        if (text.includes('•')) {
            const parts = text.split('\n\n');
            return parts.map((part, idx) => {
                if (part.includes('•')) {
                    const items = part.split('\n').filter(line => line.trim().startsWith('•'));
                    return (
                        <FaqListPoint key={idx}>
                            {items.map((item, i) => (
                                <FaqListItem key={i}>{item.trim().replace('• ', '')}</FaqListItem>
                            ))}
                        </FaqListPoint>
                    );
                }
                return <FaqAnswerText key={idx}>{part}</FaqAnswerText>;
            });
        }
        
        const paragraphs = text.split('\n\n');
        return paragraphs.map((paragraph, idx) => (
            <FaqAnswerText key={idx}>{paragraph}</FaqAnswerText>
        ));
    };

    return (
        <FaqSection id="faq">
            <Wrap>
                <SectionHeadCenter ref={headRef} $visible={headInView}>
                    <Title>Perguntas Frequentes</Title>
                </SectionHeadCenter>

                <FaqList ref={listRef} $visible={listInView}>
                    {FAQ_ITEMS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <FaqItem key={item.question}>
                                <FaqQuestion
                                    aria-expanded={isOpen}
                                    onClick={() => toggle(index)}
                                >
                                    {item.question}
                                    <FaqIcon $open={isOpen} aria-hidden="true">+</FaqIcon>
                                </FaqQuestion>
                                <FaqAnswer $open={isOpen}>
                                    <FaqAnswerContent>
                                        {renderAnswer(item.answer)}
                                    </FaqAnswerContent>
                                </FaqAnswer>
                            </FaqItem>
                        );
                    })}
                </FaqList>
            </Wrap>
        </FaqSection>
    );
}

export default Faq;