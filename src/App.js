import React, { useState, createContext } from 'react';
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components/macro';
import { lightTheme, darkTheme, customProperties } from './theme';
import GlobalCSS from './global.css';

import Header from './blocks/Header';
import FollowersContainer from './blocks/Followers/FollowersContainer';
import OverviewContainer from './blocks/Overview/OverviewContainer';
import Attribution from './blocks/Attribution';
import { H2 } from './elements/Headings';

export const ModeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalCSS />
            <>
                <ThemeProvider theme={customProperties}>
                    <Container>
                        <ModeContext.Provider
                            value={{
                                setTheme: setTheme,
                            }}
                        >
                            <Header />
                        </ModeContext.Provider>
                        <FollowersContainer />

                        <H2 marginTop='2.8125rem'>Overview - Today</H2>
                        <OverviewContainer />
                        <Attribution />
                    </Container>
                </ThemeProvider>
            </>
        </ThemeProvider>
    );
}

const Container = styled.main`
    padding: 2.5rem 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        padding: 2.5rem 10rem;
    }
`;

export default App;
