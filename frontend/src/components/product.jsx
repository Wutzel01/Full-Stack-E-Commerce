import React, { Component } from 'react';

class Product extends Component 
{
    state = { }
    render() 
    {
        return <div className="card" styles={{width: '18rem'}}>
        <img src={"/img/" + this.props.image} className="card-img-top" alt={this.props.title} />
        <div >
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href="/cart" className="btn btn-primary">
            Adoptieren
          </a>      
        </div>    
      </div>;
    }
}

export default Product;