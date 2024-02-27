import React from 'react'
import { useState,useEffect } from 'react';

const Fetchapicomponent = () => {
    const [products, setProducts] = useState([])

    useEffect (()=>{
        fetch(
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch((err)=> console.log("Error:" + err))
        )
    })
  return (
    <>
        <div className="container">
            <ul> 
                <li><a href="dd">Home</a></li>
                <li><a href="dd">About</a></li>
                <li><a href="dd">Services</a></li>
            </ul> 
        </div>
        <h3>Select from our Products Varieties</h3>
        {/* Let's map each product */}
        {products.map((product)=>(
            <div className="wrapper">
                <div className="products-wrapper">
                    <img src={product.image} alt='d'/>
                    <p>{product.title}</p>
                    <h4>{product.category}</h4>
                    <button className="btn">${product.price}</button>
                    <button className="btn">Add to cart</button>
                </div>
            </div>
        ))}
    </>
  )
}

export default Fetchapicomponent