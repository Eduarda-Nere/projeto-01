import styled from 'styled-components';
import { SectionDescription } from './SectionDescription';

export const GoldList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const GoldListItem = styled(SectionDescription)`
    position: relative;
    max-width: none;
    padding-left: 1.5rem;
    text-align: left;
    hyphens: manual;
    margin: 0;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: calc(0.9em - 3px);
        width: 6px;
        height: 6px;
        background-color: ${({ theme }) => theme.colors.gold};
        transform-origin: center;
    }

    strong {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;