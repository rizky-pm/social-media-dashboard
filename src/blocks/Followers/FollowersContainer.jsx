import React from 'react';
import styled from 'styled-components';

import FollowersCard from './FollowersCard';

import { followers } from '../../dataset';

const FollowersContainer = () => {
    return (
        <Container>
            {followers.map((data) => {
                return (
                    <FollowersCard
                        key={data.platform}
                        platform={data.platform}
                        followers={data.followers}
                        todayChanges={data.todayChanges}
                        username={data.username}
                        increase={data.increase}
                    />
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        display: flex;
        column-gap: 30px;
        margin-top: 45px;
    }
`;

export default FollowersContainer;
