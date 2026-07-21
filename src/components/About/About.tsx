import { useInView } from '../../hooks/useInView';
import {
    AboutSection,
    Wrap,
    AboutGrid,
    AboutMedia,
    AboutCopy,
    Eyebrow,
    Title,
    Paragraph,
    StatsGrid,
    StatItem,
} from './About.styles';
import fundoImg from '../../assets/img/fundo.jpg';

const STATS = [
    { value: '1', label: 'Anos de atuação' },
    { value: '1', label: 'Obras entregues' },
    { value: '1', label: 'Estados atendidos' },
];

function About() {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <AboutSection id="sobre">
            <Wrap>
                <AboutGrid ref={ref}>
                    <AboutMedia $bgImage={fundoImg} $visible={inView} aria-hidden="true" />
                    <AboutCopy $visible={inView}>
                        <Eyebrow>Sobre Nós</Eyebrow>
                        <Title>Quem somos?</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </Paragraph>
                        <Paragraph>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident.
                        </Paragraph>
                        <StatsGrid>
                            {STATS.map((stat) => (
                                <StatItem key={stat.label}>
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </StatItem>
                            ))}
                        </StatsGrid>
                    </AboutCopy>
                </AboutGrid>
            </Wrap>
        </AboutSection>
    );
}

export default About;