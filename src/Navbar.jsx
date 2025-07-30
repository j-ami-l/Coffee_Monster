import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <br />
            <NavLink to={'/add'}>Add Student</NavLink>
            <br />
            <NavLink to={'/allstudents'}>All Students</NavLink>
        </div>
    );
};

export default Navbar;