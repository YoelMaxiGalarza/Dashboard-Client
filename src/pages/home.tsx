import React from 'react';
import { useList } from '@pankod/refine-core/dist/hooks';

import { PieChart, PropertyReferals, PropertyCard, TopAgent, TotalRevenue } from 'components';
import { Box, Stack, Typography } from '@pankod/refine-mui';

const Home = () => {
    return (
        <Box >
            <Typography fontSize={25} fontWeight={700} color='#11142D'>
                Dashboard
            </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart title="Properties for Sale" value={684} series={[75, 25]} colors={['#475be8', '#e4e8ef']}/>
                <PieChart title="Properties for Rent" value={550} series={[60, 40]} colors={['#475ae8', '#e4b8ef']}/>
                <PieChart title="Total customers" value={5684} series={[75, 25]} colors={['#275be8', '#c4e8ef']}/>
                <PieChart title="Properties for Cities" value={5} series={[75, 25]} colors={['#475be8', '#e4e8ef']}/>
            </Box>
        </Box>
    );
};

export default Home;
