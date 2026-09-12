import { useInViewOnce } from '../../hooks/useInViewOnce';
import { SectionWrap } from '../ui';
import {
    AboutSection,
    AboutGrid,
    AboutMediaWrapper,
    AboutMedia,
    AboutCopy,
    Title,
    Block,
    Paragraph,
    MarketsStrip,
    MarketsGrid,
    MarketItem,
    MarketHead,
    MarketIcon,
    MarketTitle,
    MarketDescription,
} from './About.styles';
import fundoImg from '../../assets/img/fundo.jpg';

const MARKETS = [
    {
        icon: 'fas fa-home',
        title: 'Residencial',
        description: 'Casas, sobrados, edículas, reformas e condomínios.',
    },
    {
        icon: 'fas fa-store',
        title: 'Comercial',
        description: 'Lojas, salões, escritórios, retrofit de fachada e adequação de espaços.',
    },
    {
        icon: 'fas fa-industry',
        title: 'Industrial',
        description: 'Galpões, barracões, áreas de produção e infraestrutura de apoio.',
    },
];

function About() {
    const { ref: mediaRef, inView: mediaInView } = useInViewOnce<HTMLDivElement>();
    const { ref: titleRef, inView: titleInView } = useInViewOnce<HTMLDivElement>();
    const { ref: introRef, inView: introInView } = useInViewOnce<HTMLDivElement>();
    const { ref: modelRef, inView: modelInView } = useInViewOnce<HTMLDivElement>();
    const { ref: practiceRef, inView: practiceInView } = useInViewOnce<HTMLDivElement>();
    const { ref: marketsRef, inView: marketsInView } = useInViewOnce<HTMLDivElement>();

    return (
        <AboutSection id="sobre">
            <SectionWrap>
                <AboutGrid>
                    <AboutMediaWrapper ref={mediaRef}>
                        <AboutMedia $visible={mediaInView}>
                            <img src={fundoImg} alt="Obra da Lopez Engenharia" />
                        </AboutMedia>
                    </AboutMediaWrapper>

                    <AboutCopy>
                        <Title ref={titleRef} $visible={titleInView}>
                            Sobre Nós
                        </Title>

                        <Block ref={introRef} $visible={introInView}>
                            <Paragraph>
                                A Lopez Engenharia constrói de ponta a ponta. Em vez de entregar um
                                projeto e desejar boa sorte, assumimos o ciclo completo - estudo de
                                viabilidade, projeto integrado, aprovação nos órgãos, execução e
                                entrega da chave - em obras residenciais, comerciais e industriais.
                                Um contrato, um cronograma, um interlocutor.
                            </Paragraph>
                        </Block>

                        <Block ref={modelRef} $visible={modelInView}>
                            <Paragraph>
                                Esse modelo existe porque a maior parte do que dá errado numa obra
                                não acontece na obra: acontece na fronteira entre quem projetou, quem
                                aprovou e quem executou. Quando essas três mãos são a mesma, o erro
                                não tem para onde ser empurrado. É por isso que trabalhamos por
                                simplificação, decompor o complexo até que cada etapa seja
                                executável sem improviso, e resolver no papel o que custaria dez
                                vezes mais em concreto.
                            </Paragraph>
                        </Block>

                        <Block ref={practiceRef} $visible={practiceInView}>
                            <Paragraph>
                                Na prática, isso significa três coisas para quem contrata: o
                                orçamento é fechado sobre o projeto que nós mesmos vamos executar, o
                                prazo não tem fronteira entre empresas para escorregar e existe um
                                único lugar para onde ligar quando surge uma dúvida - do primeiro
                                croqui à entrega da chave.
                            </Paragraph>
                        </Block>
                    </AboutCopy>

                    <MarketsStrip ref={marketsRef} $visible={marketsInView}>
                        <MarketsGrid>
                            {MARKETS.map((market, index) => (
                                <MarketItem
                                    key={market.title}
                                    $visible={marketsInView}
                                    $delay={0.1 + index * 0.15}
                                >
                                    <MarketHead>
                                        <MarketIcon className={market.icon} aria-hidden="true" />
                                        <MarketTitle>{market.title}</MarketTitle>
                                    </MarketHead>
                                    <MarketDescription>{market.description}</MarketDescription>
                                </MarketItem>
                            ))}
                        </MarketsGrid>
                    </MarketsStrip>
                </AboutGrid>
            </SectionWrap>
        </AboutSection>
    );
}

export default About;