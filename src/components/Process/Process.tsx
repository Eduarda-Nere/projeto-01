import { useInView } from '../../hooks/useInView';
import {
    ProcessSection,
    Wrap,
    SectionHead,
    Eyebrow,
    Title,
    Timeline,
    Step,
    StepIndex,
    StepTitle,
    StepDesc,
} from './Process.styles';

const STEPS = [
    { index: '01', title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
    { index: '02', title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
    { index: '03', title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
    { index: '04', title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
];

function Process() {
    const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
    const { ref: timelineRef, inView: timelineInView } = useInView<HTMLDivElement>();

    return (
        <ProcessSection id="o-que-fazemos">
            <Wrap>
                <SectionHead ref={headRef} $visible={headInView}>
                    <Eyebrow>O que fazemos</Eyebrow>
                    <Title>Carreira & Negócios</Title>
                </SectionHead>
            </Wrap>

            <Wrap>
                <Timeline ref={timelineRef}>
                    {STEPS.map((step, i) => (
                        <Step key={step.index} $visible={timelineInView} $delay={i * 0.08}>
                            <StepIndex>{step.index}</StepIndex>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDesc>{step.desc}</StepDesc>
                        </Step>
                    ))}
                </Timeline>
            </Wrap>
        </ProcessSection>
    );
}

export default Process;