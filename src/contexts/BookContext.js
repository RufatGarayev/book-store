import { createContext, useEffect, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const cartBooks = localStorage.getItem("books");
        setCart(JSON.parse(cartBooks));
    }, []);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(cart))
    });

    const addBook = (book) => {
        setCart([...cart, book])
    };

    const removeBook = (isbn13) => {
        setCart(cart.filter((book) => book.isbn13 !== isbn13));
    };

    const searchBook = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <BookContext.Provider
            value={{
                cart,
                searchQuery,
                addBook,
                removeBook,
                searchBook
            }}
        >
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;