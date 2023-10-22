import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../css/Home.css'

const Home = () => {

    // Print logged in user's username
    const location = useLocation();
    const { username } = location.state || { username: '' };

    // State variable for users
    const [users, setUsers] = useState([]);

    // Fetch data from an api
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            // Set value for state variable
            setUsers(data);
        }
        fetchData();
    }, [])


    return (
        <>
            <h2 className='text-center heading'>Hello {username}</h2>

            <div class="table-responsive">
                <table class="table table-primary" align='center'>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">User Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Display data from state variable */}
                        {users.map(user => (
                            < tr class="" key={user.id} >
                                <td scope="row">{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                            </tr >
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home