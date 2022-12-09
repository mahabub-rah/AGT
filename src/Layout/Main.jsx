import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Banner';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;