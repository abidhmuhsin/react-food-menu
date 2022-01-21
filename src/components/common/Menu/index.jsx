import React from 'react';
import { menuItemsData } from './data';
import MenuItem from './MenuItem';
import './styles.css'

const Menu = () => {
    return (
        <main>
            {
                menuItemsData.map(item => {
                    return <MenuItem item={item} key={item.id} />
                })
            }
        </main>
    );
};

export default Menu;
