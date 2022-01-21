import React from 'react';
import {useNavigate} from 'react-router-dom'
import './styles.css'

const EmptyCart = () => {

    const navigate = useNavigate()
    const emptyCartImg =''

    return (
        <div className="emptyCart">
            <img src={emptyCartImg} alt="Your Cart is Empty" />
            <button onClick={() => navigate('/')}> Shop Now
                <i className="fas fa-long-arrow-alt-left"></i>
            </button>

        </div> 
        )
};

export default EmptyCart;
