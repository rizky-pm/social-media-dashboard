import styled from 'styled-components';

export const Image = styled.img`
    grid-area: ${(props) => props.gridArea};
    justify-self: ${(props) => props.justifySelf};
`;
