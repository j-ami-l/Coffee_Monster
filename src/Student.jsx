import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Student = () => {
    const student = useLoaderData()
    
    return (
        <div>
            <h1>Name : {student.name}</h1>
            <h2>Email : {student.email}</h2>
            <Link to={`/student/update/${student._id}`}><button>Update</button></Link>
        </div>
    );
};

export default Student;