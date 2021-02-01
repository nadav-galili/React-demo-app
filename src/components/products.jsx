import React, { Component } from 'react';

class Products extends Component {
    state = { 
products:[
    {id:1, title:'Product 1', price:25},
    {id:2, title:'Product 2', price:100},
    {id:3, title:'Product 3', price:75.5}
]
     }
// remove selected item from the list
     removeFromCart=(productId)=>{
      let  {products}=this.state;
        products=products.filter(product=>product.id!==productId);
        this.setState({products})
     }
// render
     render() { 
        const {products}=this.state;
        return (
            <div className='container'>
                <div className="row">
{products.map(product=>
<div className='col-12 mt-3' key={product.id}>
    <div className="card">
    <div className="card-body">
    <h3 className='card-title'>{product.title}</h3>
    <p className='card-text text-primary'>
    <b>Price:</b>${product.price}<br/>
    <button className='btn btn-danger'type='button' onClick={()=>{this.removeFromCart(product.id)}}>Remove</button>
</p>
    </div>
    </div>
</div>
)}
</div>
            </div>
          );
    }
}
 
export default Products;