import React from 'react';
import styled from 'styled-components';

import { H2, H4 } from './../elements/Headings';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <Container>
            <H2>Social Media Dashboard</H2>
            <H4>Total Followers: 23,004</H4>
            <ThemeToggle />
        </Container>
    );
};

const Container = styled.div`
    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0px 0px;
        grid-template-areas:
            'title toggle'
            'total toggle';

        place-content: center;
    }
`;

export default Header;
