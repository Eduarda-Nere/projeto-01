import { useInView } from '../../hooks/useInView';
import {
    AboutSection,
    Wrap,
    AboutGrid,
    AboutMedia,
    AboutCopy,
    Title,
    Paragraph,
} from './About.styles';
import fundoImg from '../../assets/img/fundo.jpg';

function About() {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <AboutSection id="sobre">
            <Wrap>
                <AboutGrid ref={ref}>
                    <AboutMedia $bgImage={fundoImg} $visible={inView} aria-hidden="true" />
                    <AboutCopy $visible={inView}>
                        <Title>Sobre Nós</Title>
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
                        <Paragraph>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </Paragraph>
                    </AboutCopy>
                </AboutGrid>
            </Wrap>
        </AboutSection>
    );
}

export default About;