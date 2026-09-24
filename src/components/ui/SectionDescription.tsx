import styled from 'styled-components';
import { SectionSubtitle } from './SectionSubtitle';

export const SectionDescription = styled(SectionSubtitle)`
    font-size: clamp(0.85rem, 1vw, 0.9rem);
    font-weight: 300;
    line-height: 1.7;
    max-width: ${({ $maxWidth }) => $maxWidth ?? '65ch'};
    margin: 0;
    text-align: justify;
    hyphens: auto;
`;