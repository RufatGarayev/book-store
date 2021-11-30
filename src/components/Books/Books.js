import React, { useState, useContext, useEffect } from "react";
import Book from './Book';
import { BookContext } from "../../contexts/BookContext";
import { Container, Grid, Box } from '@mui/material';
import Pagination from "./Pagination";

const Books = () => {
    const { books, getBooks } = useContext(BookContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(8);
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const totalPagesNum = Math.ceil(books.length / booksPerPage);

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="books" style={{ padding: "100px 0 40px" }}>
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {
                        currentBooks.map((book) => (
                            <Grid
                                item
                                xs={4}
                                sm={4}
                                md={3}
                                key={book.isbn13}
                                style={{ display: "flex", justifyContent: "center" }}
                            >
                                <Book book={book} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            <Box py={3} display="flex" justifyContent="center">
                <Pagination
                    pages={totalPagesNum}
                    setCurrentPage={setCurrentPage}
                />
            </Box>
        </div>
    );
};

export default Books;