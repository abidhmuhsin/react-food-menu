import React from 'react';
import MenuItem from './MenuItem';
import './styles.css'

const Menu = ({list}) => {
    return (
        <main>
            {
                list.map(item => {
                    return <MenuItem item={item} key={item.id} />
                })
            }
        </main>
    );
};

export default Menu;
