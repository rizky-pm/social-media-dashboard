import React from 'react';
import styled from 'styled-components';

import ReplaceWithK from '../../utility/ReplaceWithK';

import IconUp from '../../images/icon-up.svg';
import IconDown from '../../images/icon-down.svg';
import IconFacebook from '../../images/icon-facebook.svg';
import IconTwitter from '../../images/icon-twitter.svg';
import IconInstagram from '../../images/icon-instagram.svg';
import IconYoutube from '../../images/icon-youtube.svg';

import { customProperties } from '../../theme';
import { ColoredSpan, BoldedSpan, Span, ThinSpan } from '../../elements/Span';
import { Image } from '../../elements/Image';

const FollowersCard = (props) => {
    const { platform, followers, todayChanges, username, increase } = props;

    let iconArrow;
    if (increase) {
        iconArrow = IconUp;
    } else {
        iconArrow = IconDown;
    }

    let border;
    let iconPlatform;
    switch (platform) {
        case 'facebook':
            border = customProperties.colors.facebook;
            iconPlatform = IconFacebook;
            break;
        case 'twitter':
            border = customProperties.colors.twitter;
            iconPlatform = IconTwitter;
            break;
        case 'instagram':
            border = customProperties.colors.instagram;
            iconPlatform = IconInstagram;
            break;
        case 'youtube':
            border = customProperties.colors.youtube;
            iconPlatform = IconYoutube;
            break;
        default:
            break;
    }

    return (
        <Container border={border}>
            <TextWithIconContainer>
                <Image src={iconPlatform} alt='Platform' />
                <Span>{username}</Span>
            </TextWithIconContainer>

            <NumberContainer>
                <BoldedSpan fontSize='3.625rem'>
                    {ReplaceWithK(followers)}
                </BoldedSpan>
                <ThinSpan>
                    {platform === 'youtube' ? 'Subscribers' : 'Followers'}
                </ThinSpan>
            </NumberContainer>

            <TextWithIconContainer>
                <Image src={iconArrow} alt='Icon Arrow' />
                <ColoredSpan increase={increase}>
                    {todayChanges} Today
                </ColoredSpan>
            </TextWithIconContainer>
        </Container>
    );
};

const Container = styled.div`
    flex-basis: 20.625rem;
    height: 13.125rem;
    padding: 1.5625rem 0;
    border-radius: 0.3125rem;
    background: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.primaryText};
    transition: all 0.5s;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:before {
        content: '';
        height: 0.3125rem;
        width: 100%;
        background: ${(props) => props.border};
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.3125rem 0.3125rem 0 0;
    }

    &:not(:last-of-type) {
        margin-bottom: 1.5625rem;
    }

    &:hover {
        background: ${({ theme }) => theme.cardBgHover};
        cursor: pointer;
    }

    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        flex-basis: 260px;
        flex-grow: 1;
    }
`;

const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
`;

export default FollowersCard;
