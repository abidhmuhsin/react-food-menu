import React, { forwardRef } from 'react';
import MenuItem from './MenuItem';
import './styles.css'

const Menu = forwardRef(({ list }, ref) => {
    return (
        <main ref={ref}>
            {
                list.map(item => {
                    return <MenuItem item={item} key={item.id} />
                })
            }
        </main>
    );
});

export default Menu;
