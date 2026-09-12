import { useInViewOnce } from '../../hooks/useInViewOnce';
import { SectionWrap, SectionHead, SectionTitle, SectionSubtitle } from '../ui';
import {
    CulturaSection,
    CardsGrid,
    Card,
    CardNumber,
    CardTitle,
    CardText,
} from './Cultura.styles';

const CARDS = [
    {
        number: '01',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        number: '02',
        title: 'Dolor sit amet',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        number: '03',
        title: 'Consectetur elit',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        number: '04',
        title: 'Sed do eiusmod',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

function Cultura() {
    const { ref: headRef, inView: headInView } = useInViewOnce<HTMLDivElement>();
    const { ref: cardsRef, inView: cardsInView } = useInViewOnce<HTMLDivElement>();

    return (
        <CulturaSection id="cultura">
            <SectionWrap>
                <div ref={headRef}>
                    <SectionHead visible={headInView}>
                        <SectionTitle $light>Cultura</SectionTitle>
                        <SectionSubtitle $light>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </SectionSubtitle>
                    </SectionHead>
                </div>

                <CardsGrid ref={cardsRef} $visible={cardsInView}>
                    {CARDS.map((card, index) => (
                        <Card
                            key={card.number}
                            $delay={0.1 + index * 0.1}
                            $visible={cardsInView}
                        >
                            <CardNumber>{card.number}</CardNumber>
                            <CardTitle>{card.title}</CardTitle>
                            <CardText>{card.text}</CardText>
                        </Card>
                    ))}
                </CardsGrid>
            </SectionWrap>
        </CulturaSection>
    );
}

export default Cultura;