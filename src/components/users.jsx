import React, { Component } from 'react';

class Users extends Component {
    state = { 
        users:[
            // {id:1, name:'Moshe', age:44},
            // {id:22, name:'Avi', age:23},
            // {id:56, name:'Vered', age:69}
        ]
     }
    render() { 
        const {users}=this.state;
        if(users.length===0) return <p><i>No users data...</i></p>
        return (
            <table border='1'>
                <thead>
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                </tr>
                </thead>
       <tbody>
       {users.map(user=>
       <tr key={user.id}>
       <td>{user.id}</td>
       <td>{user.name}</td>
       <td>{user.age}</td>
       </tr>
 )}       
        </tbody>        
        </table>
)}}
export default Users;