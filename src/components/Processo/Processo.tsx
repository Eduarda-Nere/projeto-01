import { useInViewOnce } from '../../hooks/useInViewOnce';
import { SectionWrap, SectionHead, SectionTitle } from '../ui';
import {
    ProcessoSection,
    CardsGrid,
    Card,
    CardNumber,
    CardTitle,
    CardText,
    CardDelivery,
    CardDeliveryLabel,
    CardDeliveryText,
} from './Processo.styles';

const STEPS = [
    {
        number: '01',
        title: 'Viabilidade',
        text: 'Zoneamento, recuos e ocupação checados antes do primeiro traço. Você descobre o que cabe no lote e quanto custa.',
        delivery: 'estudo de viabilidade + orçamento preliminar',
    },
    {
        number: '02',
        title: 'Projeto integrado',
        text: 'Arquitetura, estrutura e instalações resolvidas no projeto, não na obra.',
        delivery: 'pranchas executivas + memorial + orçamento fechado',
    },
    {
        number: '03',
        title: 'Aprovação e preparação',
        text: 'Alvará, cronograma e fornecedores fechados. As exigências são resolvidas por nós, não pelo cliente no balcão.',
        delivery: 'alvará + cronograma + plano de segurança',
    },
    {
        number: '04',
        title: 'Execução e entrega',
        text: 'Obra conduzida contra o cronograma, com relatório periódico. Vistoria final e chave na mão.',
        delivery: 'relatórios de obra + documentação de encerramento + chave',
    },
];

function Processo() {
    const { ref: headRef, inView: headInView } = useInViewOnce<HTMLDivElement>();
    const { ref: cardsRef, inView: cardsInView } = useInViewOnce<HTMLDivElement>();

    return (
        <ProcessoSection id="processo">
            <SectionWrap>
                <div ref={headRef}>
                    <SectionHead visible={headInView}>
                        <SectionTitle $light>Do simples ao complexo, bem feito.</SectionTitle>
                    </SectionHead>
                </div>

                <CardsGrid ref={cardsRef} $visible={cardsInView}>
                    {STEPS.map((step, index) => (
                        <Card
                            key={step.number}
                            $delay={0.1 + index * 0.1}
                            $visible={cardsInView}
                        >
                            <CardNumber>{step.number}</CardNumber>
                            <CardTitle>{step.title}</CardTitle>
                            <CardText>{step.text}</CardText>

                            <CardDelivery>
                                <CardDeliveryLabel>Entrega</CardDeliveryLabel>
                                <CardDeliveryText>{step.delivery}</CardDeliveryText>
                            </CardDelivery>
                        </Card>
                    ))}
                </CardsGrid>
            </SectionWrap>
        </ProcessoSection>
    );
}

export default Processo;