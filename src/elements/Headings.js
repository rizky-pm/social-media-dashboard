import styled from 'styled-components';

export const H2 = styled.h2`
    color: ${({ theme }) => theme.primaryText};
    transition: color 0.5s ease;
    margin-top: ${(props) => props.marginTop};

    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        grid-area: title;
        align-self: center;
        font-size: 1.75rem;
    }
`;

export const H4 = styled.h4`
    color: ${({ theme }) => theme.secondaryText};
    transition: color 0.5s ease;
    font-size: 0.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        grid-area: total;
        align-self: center;
        /* font-size: 1rem; */
    }
`;
