import React from 'react';
import images from './Mock.js' 
import './CustomerList.css'

const CustomerList = () => {
    return (
        <>
        <p className='customer__p' >Clientes</p>
        <div className='customer__container'>
            {
                images.map((img) => (
                    <img src={img} />
                ))
            }
        </div>
        </>
      
    )
}

export default CustomerList;