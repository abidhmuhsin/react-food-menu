import React from 'react';
import CartCountButton from '../../components/common/CartCountButton';
import Footer from '../../components/common/Footer';
import Menu from '../../components/common/Menu';
import Banner from '../../components/Home/Banner';
import './styles.css'


const Home = () => {
    return (
        <div>
            <Banner/>
            <Menu/>
            <Footer/>
            <CartCountButton></CartCountButton>
        </div>
    )
};

export default Home;
