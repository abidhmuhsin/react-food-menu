import React from 'react';
import './styles.css'

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
    return (<div className='btnAddRemove'>
        {quantity !== 0 ?
            <div className='btnAddRemove-negative'>
            <i className="fa fa-minus" onClick={handleRemoveItem}></i>
                {quantity}
            <i className="fa fa-plus" onClick={handleAddItem}></i>
            </div>
            :
            <div className='btnAddRemove-positive' onClick={handleAddItem}>
                ADD
                <i className="fa fa-plus"></i>
            </div>
        }

    </div>)
};

export default ButtonAddRemoveItem;
