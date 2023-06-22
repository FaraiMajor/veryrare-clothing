import React from 'react';
import { Outlet } from 'react-router-dom';


import Directory from '../../components/directory/directory';

const Home = () => {
    return (
        <>
            < Directory />
            <Outlet />
        </>
    )
};

export default Home;