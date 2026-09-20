import { motion } from 'framer-motion';
import type {
    Target,
    TargetAndTransition,
    Transition,
    VariantLabels,
} from 'framer-motion';
import styled from 'styled-components';

export type TextRollProps = {
    children: string;
    duration?: number;
    getEnterDelay?: (index: number) => number;
    getExitDelay?: (index: number) => number;
    className?: string;
    transition?: Transition;
    variants?: {
        enter: {
            initial: Target | VariantLabels | boolean;
            animate: TargetAndTransition | VariantLabels;
        };
        exit: {
            initial: Target | VariantLabels | boolean;
            animate: TargetAndTransition | VariantLabels;
        };
    };
    onAnimationComplete?: () => void;
};

const Wrapper = styled.span`
    display: inline;
`;

const LetterWrapper = styled.span`
    position: relative;
    display: inline-block;
    perspective: 10000px;
    transform-style: preserve-3d;
    width: auto;
    height: 1em;
    line-height: 1;
    vertical-align: baseline;
`;

const LetterLayer = styled(motion.span)`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    backface-visibility: hidden;
    transform-style: preserve-3d;
`;

const EnterLayer = styled(LetterLayer)`
    transform-origin: 50% 25%;
`;

const ExitLayer = styled(LetterLayer)`
    transform-origin: 50% 100%;
`;

const InvisibleLetter = styled.span`
    visibility: hidden;
    display: inline-block;
`;

export function TextRoll({
    children,
    duration = 0.5,
    getEnterDelay = (i) => i * 0.05,
    getExitDelay = (i) => i * 0.05 + 0.15,
    className,
    transition = { ease: 'easeIn' },
    variants,
    onAnimationComplete,
}: TextRollProps) {
    const defaultVariants = {
        enter: {
            initial: { rotateX: 0, opacity: 1 },
            animate: { rotateX: 90, opacity: 0 },
        },
        exit: {
            initial: { rotateX: 90, opacity: 0 },
            animate: { rotateX: 0, opacity: 1 },
        },
    } as const;

    const letters = children.split('');

    return (
        <Wrapper className={className}>
            {letters.map((letter, i) => (
                <LetterWrapper key={i} aria-hidden="true">
                    <EnterLayer
                        initial={
                            variants?.enter?.initial ??
                            defaultVariants.enter.initial
                        }
                        animate={
                            variants?.enter?.animate ??
                            defaultVariants.enter.animate
                        }
                        transition={{
                            ...transition,
                            duration,
                            delay: getEnterDelay(i),
                        }}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </EnterLayer>
                    <ExitLayer
                        initial={
                            variants?.exit?.initial ??
                            defaultVariants.exit.initial
                        }
                        animate={
                            variants?.exit?.animate ??
                            defaultVariants.exit.animate
                        }
                        transition={{
                            ...transition,
                            duration,
                            delay: getExitDelay(i),
                        }}
                        onAnimationComplete={
                            letters.length === i + 1
                                ? onAnimationComplete
                                : undefined
                        }
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </ExitLayer>
                    <InvisibleLetter>
                        {letter === ' ' ? '\u00A0' : letter}
                    </InvisibleLetter>
                </LetterWrapper>
            ))}
            <span className="sr-only">{children}</span>
        </Wrapper>
    );
}