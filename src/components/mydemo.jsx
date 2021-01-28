import React, { Component } from 'react';

class Mydemo extends Component {
    state = { 
        counter:0
     }
     
incrementCounter= ()=>{
let {counter}=this.state;
counter++;
this.setState({counter:counter})
};

decreaseCounter=()=>{
    let {counter}=this.state;
    if (counter>0)
    counter--;
    this.setState({counter})
}
    render() { 
        const {counter}=this.state;
        return ( 
            <div> 
               <button type='button' onClick={this.incrementCounter}>+</button>
                <span>{counter}</span>
                <button type='button' onClick={this.decreaseCounter}>-</button>

            </div>
         );
    }
}
 
export default Mydemo;