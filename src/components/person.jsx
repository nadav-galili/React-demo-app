import React, { Component } from 'react';

class Person extends Component {
constructor(){
    super();
    this.markText=this.markText.bind(this)
}
    state = { 
        marked:true
     }
     
     markText(){
let {marked}=this.state;
this.setState({marked:! marked})
     }

    render() { 
        const {marked}=this.state;
        return (
       <div>
           
         { ! marked && <p>lorem ipsum dolor amet </p>} 
         {  marked && <p style={{backgroundColor:'yellow'}}>lorem ipsum dolor amet </p>} 

           <button type='button' onClick={this.markText}>Mark</button>
       </div>
          );
    }
}
 
export default Person;