import { useInView } from '../../hooks/useInView';
import {
    ProcessSection,
    Wrap,
    SectionHead,
    Eyebrow,
    Title,
    Timeline,
    Step,
    StepTitle,
    StepDesc,
} from './Process.styles';

const STEPS = [
    { title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
    { title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
    { title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
    { title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
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
                        <Step key={i} $visible={timelineInView} $delay={i * 0.08}>
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