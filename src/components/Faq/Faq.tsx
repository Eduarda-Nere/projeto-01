import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import {
    FaqSection,
    Wrap,
    SectionHeadCenter,
    Eyebrow,
    Title,
    FaqList,
    FaqItem,
    FaqQuestion,
    FaqIcon,
    FaqAnswer,
} from './Faq.styles';

const FAQ_ITEMS = [
    { question: 'Pergunta 1?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: 'Pergunta 2?', answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'Pergunta 3?', answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { question: 'Pergunta 4?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

function Faq() {
    const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
    const { ref: listRef, inView: listInView } = useInView<HTMLDivElement>();

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <FaqSection id="faq">
            <Wrap>
                <SectionHeadCenter ref={headRef} $visible={headInView}>
                    <Eyebrow>FAQ</Eyebrow>
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
                                    <p>{item.answer}</p>
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