import React, { useContext, useEffect } from "react";
import Book from './Book';
import CartContext from "../../contexts/cart/CartContext";
import { Container, Grid } from '@mui/material';

const Books = () => {
    const { books, getBooks } = useContext(CartContext);

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="books">
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {
                        books.map((book) => (
                            <Grid
                                item
                                xs={4}
                                sm={4}
                                md={3}
                                key={book.id}
                                style={{ display: "flex", justifyContent: "center" }}
                            >
                                <Book book={book} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Books;