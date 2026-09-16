import {
    ProcessoWrapper,
    ProcessoHeader,
    ProcessoTitle,
    CardsStack,
    StickyCard,
    GridBackground,
    CardContent,
    CardTitle,
    CardText,
    CardDelivery,
    CardDeliveryLabel,
    CardDeliveryText,
} from './Processo.styles';

const STEPS = [
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
    return (
        <ProcessoWrapper id="processo">
            <ProcessoHeader>
                <ProcessoTitle>Do simples ao complexo, bem feito.</ProcessoTitle>
            </ProcessoHeader>

            <CardsStack>
                {STEPS.map((step, index) => {
                    const isDark = index % 2 !== 0;
                    const bgType = isDark ? 'dark' : 'light';

                    return (
                        <StickyCard
                            key={step.title}
                            $bg={bgType}
                            $index={index}
                        >
                            <GridBackground $isDark={isDark} />

                            <CardContent>
                                <CardTitle>{step.title}</CardTitle>
                                <CardText $isDark={isDark}>{step.text}</CardText>

                                <CardDelivery>
                                    <CardDeliveryLabel>Entrega</CardDeliveryLabel>
                                    <CardDeliveryText $isDark={isDark}>
                                        {step.delivery}
                                    </CardDeliveryText>
                                </CardDelivery>
                            </CardContent>
                        </StickyCard>
                    );
                })}
            </CardsStack>
        </ProcessoWrapper>
    );
}

export default Processo;