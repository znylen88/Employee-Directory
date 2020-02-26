import React, { useEffect, useState } from "react";
import API from "../utils/API";

function DataTable() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.getUsers()
            .then(res => {
                setUsers(res.data.results)
            })
            .catch(err => console.log(err));
    }, []);
    console.log(users)


    return (
        
        <div className="container">
            {users.map(user => (
                <table style={{ marginTop: "30px", textAlign: "center" }} class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={user.login.uuid}>
                            <td><img alt={user.name.first} className="img-fluid" src={user.picture.thumbnail} /></td>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.dob.age}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default DataTable;