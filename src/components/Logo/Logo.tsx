import React from 'react';
import styled from 'styled-components';

interface LogoProps {
    scrolled?: boolean;
    className?: string;
}

const LogoSvg = styled.svg<{ $scrolled: boolean }>`
    height: 55px;
    width: auto;
    display: block;

    .lopez-text {
        fill: ${({ $scrolled, theme }) =>
        $scrolled ? theme.colors.navy : theme.colors.paper};};
        transition: fill 0.3s ${({ theme }) => theme.ease};
    }

    .linha {
        fill: ${({ theme }) => theme.colors.gold};
        transition: fill 0.3s ${({ theme }) => theme.ease};
    }

    .engenharia-text {
        fill: ${({ theme }) => theme.colors.gold};
        transition: fill 0.3s ${({ theme }) => theme.ease};
    }
`;

export const Logo: React.FC<LogoProps> = ({ scrolled = false }) => {
    return (
        <LogoSvg
            $scrolled={scrolled}
            viewBox="0 0 180 130"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Logo Lopez Engenharia"
        >
            <text
                className="lopez-text"
                x="0"
                y="45"
                fontFamily="'League Spartan', Arial, sans-serif"
                fontSize="55"
                fontWeight="350"
                textLength="180"
                lengthAdjust="spacingAndGlyphs"
            >
                LOPEZ
            </text>

            <rect className="linha" x="89.25" y="62" width="2" height="16" rx="0.75" />

            <rect className="linha" x="0" y="78" width="76" height="2" rx="0.75" />
            <rect className="linha" x="104" y="78" width="76" height="2" rx="0.75" />

            <circle className="linha" cx="90" cy="88" r="2.5" />

            <text
                className="engenharia-text"
                x="0"
                y="122"
                fontFamily="'Inter', Arial, sans-serif"
                fontSize="20"
                fontWeight="350"
                textLength="180"
                lengthAdjust="spacing"
            >
                ENGENHARIA
            </text>
        </LogoSvg>
    );
};