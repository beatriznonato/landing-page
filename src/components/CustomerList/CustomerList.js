import React from 'react';
import images from './Mock.js' 
import './CustomerList.css'

const CustomerList = () => {
    return (
        <>
            <h5>Clientes</h5>
                <div className='customer__container'>
                     {
                        images.map((img) => (
                            <img src={img} alt='logo lista clientes'/>
                        ))
                    }
                </div>
        </>
      
    )
}

export default CustomerList;