import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Update = () => {
    const student = useLoaderData()
    const { id } = useParams();

    const handleUpdate = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value

        
    }

    
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={student.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={student.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;