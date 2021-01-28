import React, { Component } from 'react';

class User extends Component {
    state = { 
        user:{
            name:'Nadav',
            id:'04444444'
        },
        showUserId:false
     }

     showName=()=>{
         let {showUserId}=this.state;
         this.setState({showUserId:!showUserId});
     }

    render() { 
        const {user,showUserId}=this.state;
        return (
            <div>
                <p><b>Name:</b>{user.name}</p>
                <p><b>ID:</b> {showUserId? user.id:'xxxxxxx'}</p>
                <p><button type='button' onClick={this.showName}> {showUserId? 'Hide':'Show'} ID</button></p>
            </div>
          );
    }
}
 
export default User;