import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';
import CartState from './contexts/cart/CartState';

ReactDOM.render(
    <CartState>
        <App />
    </CartState>,
    document.getElementById('root')
);