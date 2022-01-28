import React from 'react';
import { selectCartItems, selectCartItemsCount } from '../../../../redux/cart/cart.selector';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './styles.css'
import { createStructuredSelector } from 'reselect';
import { cartAddItem, cartRemoveItem } from '../../../../redux/cart/cart.action';
import { connect } from 'react-redux'

const MenuItem = ({ item , cartCount, cartList,cartAddItem, cartRemoveItem}) => {
    const { id, name, info, price, img } = item;
    const handleQuantity = ()=>{
        let qty = 0;
        if(cartCount!==0){
            const foundItemInCart = cartList?.find(item=>item.id===id);

            if(foundItemInCart){
                qty = foundItemInCart.quantity;
            }
        }
        return qty;
    }
    return (
        <div className='item'>
            <img src={img} alt='food' />
            <div className='item-head_desc'>
                <p className='head_desc-name'>{name}</p>
                <p className='head_desc-info'>
                    <small>{info}</small>
                </p>
            </div>
            <div className='item-foot_desc'>
                <span className='foot_desc-price'>₹ {price}</span>
                <ButtonAddRemoveItem
                    quantity={handleQuantity()}
                    handleRemoveItem={() => cartRemoveItem(item)}
                    handleAddItem={() => cartAddItem(item)}
                />
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    // cartTotal: selectCartTotal
})

const mapDispatchToProps= dispatch=>({
    cartAddItem: item=>dispatch(cartAddItem(item)),
    cartRemoveItem: item=>dispatch(cartRemoveItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);

// export default MenuItem;
