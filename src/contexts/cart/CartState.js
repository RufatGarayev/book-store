import { useReducer } from "react";
import axios from "axios";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { GET_BOOKS } from "../types";

const CartState = ({ children }) => {
    const initalState = {
        books: [],
    };

    const [state, dispatch] = useReducer(CartReducer, initalState);

    const getBooks = () => {
        axios
            .get("https://api.itbook.store/1.0/new")
            .then(response => dispatch({ type: GET_BOOKS, payload: response.data.books }))
            .catch(error => console.log(error))
    };

    return (
        <CartContext.Provider
            value={{
                books: state.books,
                getBooks,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartState;