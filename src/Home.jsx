import React from 'react';
import App from './App';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;