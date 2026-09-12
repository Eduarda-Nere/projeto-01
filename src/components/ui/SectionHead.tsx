import type { ReactNode } from 'react';
import styled from 'styled-components';

const Head = styled.div<{ $visible: boolean }>`
    text-align: center;
    max-width: 700px;
    margin: 0 auto clamp(2.5rem, 5vw, 4rem);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? '0' : '32px')});
    transition: opacity ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease},
                transform ${({ theme }) => theme.duration.slower} ${({ theme }) => theme.ease};
`;

interface SectionHeadProps {
    visible: boolean;
    children: ReactNode;
}

export function SectionHead({ visible, children }: SectionHeadProps) {
    return <Head $visible={visible}>{children}</Head>;
}