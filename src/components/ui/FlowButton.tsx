import styled from 'styled-components';
import { forwardRef } from 'react';

interface FlowButtonProps {
    text?: string;
    scrolled?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    as?: 'button' | 'a';
    href?: string;
}

const StyledFlowButton = styled.button<{ $scrolled: boolean }>`
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
    border-radius: 6px;
    border: 1.5px solid ${({ $scrolled, theme }) =>
        $scrolled ? theme.colors.navy : theme.colors.cream};
    background: transparent;
    padding: 0.5rem 1.5rem;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${({ $scrolled, theme }) =>
        $scrolled ? theme.colors.navy : theme.colors.cream};
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    flex-shrink: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    text-decoration: none;

    &:hover {
        border-color: ${({ $scrolled, theme }) =>
            $scrolled ? theme.colors.navy : theme.colors.gold};
        border-radius: 6px;
        color: ${({ theme }) => theme.colors.cream};
        background: transparent;
    }

    &:active {
        transform: scale(0.95);
    }

    .btn-text {
        position: relative;
        z-index: 1;
        transition: color 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .btn-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background: ${({ $scrolled, theme }) =>
            $scrolled ? theme.colors.navy : theme.colors.gold};
        border-radius: 50%;
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        pointer-events: none;
    }

    &:hover {
        .btn-text {
            color: ${({ theme }) => theme.colors.cream};
        }

        .btn-circle {
            width: 220px;
            height: 220px;
            opacity: 1;
            background: ${({ $scrolled, theme }) =>
                $scrolled ? theme.colors.navy : theme.colors.gold};
        }
    }
`;

export const FlowButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, FlowButtonProps>(
    ({ text = "Contato", scrolled = false, onClick, as = 'button', href, ...props }, ref) => {
        if (as === 'a' && href) {
            return (
                <StyledFlowButton
                    as="a"
                    href={href}
                    $scrolled={scrolled}
                    onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
                    ref={ref as React.ForwardedRef<HTMLAnchorElement>}
                    {...props}
                >
                    <span className="btn-text">{text}</span>
                    <span className="btn-circle" />
                </StyledFlowButton>
            );
        }

        return (
            <StyledFlowButton
                as="button"
                $scrolled={scrolled}
                onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
                ref={ref as React.ForwardedRef<HTMLButtonElement>}
                {...props}
            >
                <span className="btn-text">{text}</span>
                <span className="btn-circle" />
            </StyledFlowButton>
        );
    }
);

FlowButton.displayName = 'FlowButton';

export default FlowButton;