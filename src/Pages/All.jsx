import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCard from './AllCard';

const All = () => {
    const items = useLoaderData();
    return (
        <div>
            {items.map((item, idx)=><AllCard item={item} key={idx}></AllCard>)}
        </div>
    );
};

export default All;