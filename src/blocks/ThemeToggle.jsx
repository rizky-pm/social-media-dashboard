import React, { useContext } from 'react';
import styled from 'styled-components';

import { ModeContext } from '../App';

const ThemeToggle = (props) => {
    const setTheme = useContext(ModeContext);

    const toggleHandler = (e, setter) => {
        if (!e.target.checked) {
            setter.setTheme('light');
        } else if (e.target.checked) {
            setter.setTheme('dark');
        }
    };

    return (
        <Container>
            <P>Dark Mode</P>
            <ToggleWrapper>
                <NativeToggle
                    onChange={(e) => {
                        toggleHandler(e, setTheme);
                    }}
                />
                <ToggleSlider />
            </ToggleWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 0.0625rem solid hsl(228, 28%, 20%);
    padding: 1.5625rem 0;
    margin: 1.5625rem 0;

    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        grid-area: toggle;
        justify-self: end;
        align-self: center;
        width: 9.375rem;
        border-top: none;
        padding: 0;
        margin: 0;
    }
`;

const P = styled.label.attrs({
    htmlFor: 'toggle-theme',
})`
    color: ${({ theme }) => theme.secondaryText};
    font-weight: 700;
`;

const ToggleWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 3.125rem;
    height: 1.625rem;
    outline: none;
`;

const ToggleSlider = styled.span.attrs({
    className: 'slider',
})`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.toggleBg};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 2.125rem;

    &:before {
        position: absolute;
        content: '';
        height: 1.125rem;
        width: 1.125rem;
        left: 0.3125rem;
        top: 50%;
        transform: translate(0, -50%);
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
    }
`;

const NativeToggle = styled.input.attrs({
    type: 'checkbox',
    name: 'toggle-theme',
    id: 'toggle-theme',
})`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
        & + .slider {
            background-color: #2196f3;
        }
    }

    &:focus {
        & + .slider {
            box-shadow: 0 0 0.0625rem #2196f3;
        }
    }

    &:checked {
        & + .slider:before {
            -webkit-transform: translate(1.3125rem, -50%);
            -ms-transform: translate(1.3125rem, -50%);
            transform: translate(1.3125rem, -50%);
        }
    }
`;

export default ThemeToggle;
