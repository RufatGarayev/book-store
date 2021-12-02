import { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const cartBooks = localStorage.getItem("books");
        setCart(JSON.parse(cartBooks));
    }, []);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(cart))
    });

    const getBooks = () => {
        setLoading(true);

        axios
            .get("https://api.itbook.store/1.0/new")
            .then(response => { setBooks(response.data.books); setLoading(false); })
            .catch(error => { console.log(error); setLoading(true); })
    };

    const addBook = (book) => {
        setCart([...cart, book])
    };

    const removeBook = (isbn13) => {
        setCart(cart.filter((book) => book.isbn13 !== isbn13));
    };

    const searchBook = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    });

    return (
        <BookContext.Provider
            value={{
                filteredBooks,
                cart,
                loading,
                getBooks,
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