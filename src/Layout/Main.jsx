import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Shared/Banner';
import Category from '../Shared/Category';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;