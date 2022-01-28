import React from 'react';
import EmptyCart from '../../components/Cart/EmptyCart';
import { createStructuredSelector } from 'reselect';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selector';
import './styles.css'
import { connect } from 'react-redux'

const Cart = ({ cartCount, cartList, cartTotal }) => {
    console.log(cartCount, cartList, cartTotal)
    return (
        <div>
            <div className="cart-header">
                <Logo />
            </div>
            {cartCount === 0 ?
                <EmptyCart /> :
                (
                    <div className="orders">
                        <h1 className="orders-heading">Your Orders</h1>
                        <div className="orders-menu">
                            <Menu list={cartList} />
                        </div>
                        <h1 className="orders-total">Your Total ₹{cartTotal}</h1>
                    </div>
                )
            }
            <Footer />
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal
})


export default connect(mapStateToProps)(Cart);
