import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllStudents = () => {

    const InitalStudents = useLoaderData()

    const [students , setStudents] = useState(InitalStudents)

    const handeDelete = (id) =>{
        fetch(`http://localhost:3000/delete/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const newStudent = students.filter(s => s._id !== id)
            setStudents(newStudent)
        })
    }
    
    return (
        <div>
            {
                students.map(student=><p key={student._id}>{student.name} 
                <Link to={`/student/${student._id}`}>Details</Link>
                <button onClick={()=>handeDelete(student._id)}>Delete</button>
                </p>)
            }
        </div>
    );
};

export default AllStudents;