import React from 'react';
import styled from 'styled-components';

const Attribution = () => {
    return (
        <>
            <Attr>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                🔥
            </Attr>
        </>
    );
};

const Attr = styled.p`
    color: ${({ theme }) => theme.primaryText};
    text-align: center;
    margin-top: 1.5625rem;
    transition: all 0.5s;
`;

const AttributionLink = styled.a`
    color: inherit;
    transition: all ease 0.2s;
    font-weight: 700;
    text-decoration: none;

    :hover {
        color: hsl(228, 45%, 44%);
    }
`;

export default Attribution;
