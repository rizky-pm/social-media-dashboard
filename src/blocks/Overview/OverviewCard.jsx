import React from 'react';
import styled from 'styled-components';

import ReplaceWithK from '../../utility/ReplaceWithK';

import IconFacebook from '../../images/icon-facebook.svg';
import IconTwitter from '../../images/icon-twitter.svg';
import IconInstagram from '../../images/icon-instagram.svg';
import IconYoutube from '../../images/icon-youtube.svg';
import IconUp from '../../images/icon-up.svg';
import IconDown from '../../images/icon-down.svg';

import { Span, BoldedSpan, ColoredSpan } from '../../elements/Span';
import { Image } from '../../elements/Image';

const OverviewCard = (props) => {
    const { title, platform, number, percentage, increase } = props;

    let iconArrow;
    if (increase) {
        iconArrow = IconUp;
    } else {
        iconArrow = IconDown;
    }

    let iconPlatform;
    switch (platform) {
        case 'facebook':
            iconPlatform = IconFacebook;
            break;
        case 'twitter':
            iconPlatform = IconTwitter;
            break;
        case 'instagram':
            iconPlatform = IconInstagram;
            break;
        case 'youtube':
            iconPlatform = IconYoutube;
            break;
        default:
            break;
    }

    return (
        <Container>
            <Span gridArea='title'>{title}</Span>
            <Image
                gridArea='platform'
                justifySelf='end'
                src={iconPlatform}
                alt='Platform'
            />
            <BoldedSpan gridArea='number' fontSize='2rem'>
                {ReplaceWithK(number)}
            </BoldedSpan>
            <TextWithIconContainer gridArea='percentage' justifySelf='end'>
                <Image src={iconArrow} alt='Icon Arrow' />
                <ColoredSpan increase={increase}>{percentage}</ColoredSpan>
            </TextWithIconContainer>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0rem 0rem;
    grid-template-areas:
        'title platform'
        'number percentage';

    flex-basis: 20.625rem;
    height: 7.8125rem;
    padding: 1.5625rem;
    border-radius: 0.3125rem;
    background: ${({ theme }) => theme.cardBg};
    transition: all 0.5s;

    &:not(:last-of-type) {
        margin-bottom: 0.9375rem;
    }

    &:hover {
        background: ${({ theme }) => theme.cardBgHover};
        cursor: pointer;
    }

    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        flex-basis: 13.125rem;
        flex-grow: 1;
    }
`;

const TextWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    grid-area: ${(props) => props.gridArea};
    justify-self: ${(props) => props.justifySelf};
`;

export default OverviewCard;
