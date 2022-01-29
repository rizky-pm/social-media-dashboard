import styled from 'styled-components';

export const Span = styled.span`
    color: ${({ theme }) => theme.secondaryText};
    font-weight: 700;
    font-size: 0.875rem;

    grid-area: ${(props) => props.gridArea};
`;

export const BoldedSpan = styled(Span)`
    color: ${({ theme }) => theme.primaryText};
    font-size: ${(props) => props.fontSize};

    grid-area: ${(props) => props.gridArea};
`;

export const ThinSpan = styled(Span)`
    letter-spacing: 0.3125rem;
    font-weight: 400;
    text-transform: uppercase;

    margin-top: ${(props) => props.marginTop};
`;

export const ColoredSpan = styled(Span)`
    color: ${(props) =>
        props.increase
            ? props.theme.colors.limeGreen
            : props.theme.colors.brightRed};
`;
