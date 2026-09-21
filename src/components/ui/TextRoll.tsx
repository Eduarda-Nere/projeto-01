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
    white-space: normal;
    word-break: normal;
`;

const Word = styled.span`
    display: inline-block;
    white-space: nowrap;
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

const Space = styled.span`
    display: inline-block;
    width: 0.25em;
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

    const words = children.split(' ');
    const lastWordIndex = words.length - 1;
    const lastLetterIndexInLastWord = words[lastWordIndex].length - 1;

    const startIndices = words.reduce<number[]>((acc, word, index) => {
        if (index === 0) {
            acc.push(0);
        } else {
            acc.push(acc[index - 1] + words[index - 1].length);
        }
        return acc;
    }, []);

    return (
        <Wrapper className={className}>
            {words.map((word, wordIndex) => {
                const startIndex = startIndices[wordIndex];

                return (
                    <span key={wordIndex}>
                        <Word aria-hidden="true">
                            {word.split('').map((letter, letterIndex) => {
                                const i = startIndex + letterIndex;
                                const isLastLetter =
                                    wordIndex === lastWordIndex &&
                                    letterIndex === lastLetterIndexInLastWord;

                                return (
                                    <LetterWrapper key={letterIndex}>
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
                                            {letter}
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
                                                isLastLetter
                                                    ? onAnimationComplete
                                                    : undefined
                                            }
                                        >
                                            {letter}
                                        </ExitLayer>
                                        <InvisibleLetter>
                                            {letter}
                                        </InvisibleLetter>
                                    </LetterWrapper>
                                );
                            })}
                        </Word>
                        {wordIndex < words.length - 1 && (
                            <Space aria-hidden="true"> </Space>
                        )}
                    </span>
                );
            })}
            <span className="sr-only">{children}</span>
        </Wrapper>
    );
}