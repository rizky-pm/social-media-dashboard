import React from 'react';
import styled from 'styled-components';

import OverviewCard from './OverviewCard';

import { dataOverview } from '../../dataset';

const OverviewContainer = () => {
    return (
        <Container>
            {dataOverview.map((data) => {
                return (
                    <OverviewCard
                        key={data.id}
                        title={data.title}
                        platform={data.platform}
                        number={data.number}
                        percentage={data.percentage}
                        increase={data.increase}
                    />
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    margin-top: 25px;

    @media only screen and (${(props) => props.theme.breakpoints.mDevices}) {
        margin-top: 45px;
        gap: 30px 30px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export default OverviewContainer;
