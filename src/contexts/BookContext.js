import { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartBooks = localStorage.getItem("books");
        setCart(JSON.parse(cartBooks));
    }, []);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(cart))
    });

    const getBooks = () => {
        axios
            .get("https://api.itbook.store/1.0/new")
            .then(response => setBooks(response.data.books))
            .catch(error => console.log(error))
    };

    const addBook = (book) => {
        setCart([...cart, book])
    };

    const removeBook = (isbn13) => {
        setCart(cart.filter((book) => book.isbn13 !== isbn13));
    };

    return (
        <BookContext.Provider value={{ books, cart, getBooks, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;