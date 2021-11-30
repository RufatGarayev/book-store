import React from 'react';
import CartTable from '../components/Cart/CartTable';
import { Container } from '@material-ui/core';

const ShoppingCart = () => {
    return (
        <div className="cart-content" style={{paddingTop: "120px"}}>
            <Container maxWidth="lg">
                <CartTable />
            </Container>
        </div>
    );
};

export default ShoppingCart;