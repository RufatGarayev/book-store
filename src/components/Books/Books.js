import React, { useState, useContext, useEffect } from "react";
import Book from './Book';
import { BookContext } from "../../contexts/BookContext";
import { Container, Grid, Box, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Pagination from "./Pagination";
import axios from "axios";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { searchQuery } = useContext(BookContext);

    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(8);
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
    const totalPagesNum = Math.ceil(filteredBooks.length / booksPerPage);

    useEffect(() => {
        const getBooks = () => {
            setLoading(true);

            axios
                .get("https://api.itbook.store/1.0/new")
                .then(response => { setBooks(response.data.books); setLoading(false); })
                .catch(error => { console.log(error); setLoading(true); })
        };

        getBooks();
    }, []);

    return (
        <div className="books" style={{ padding: "100px 0 40px" }}>
            <Container maxWidth="lg">
                {
                    loading ? (
                        <Typography
                            variant="subtitle1"
                            style={{ padding: "10px 0 511px" }}
                        >
                            Loading...
                        </Typography>
                    ) : (
                        filteredBooks.length > 0 ? (
                            <>
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
                                <Box py={3} display="flex" justifyContent="center">
                                    <Pagination
                                        pages={totalPagesNum}
                                        setCurrentPage={setCurrentPage}
                                    />
                                </Box>
                            </>
                        ) : (
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                pt={20}
                                pb={35}
                            >
                                <MenuBookIcon style={{ fontSize: "66px", marginBottom: "12px" }} />
                                <Typography variant="h6"> No books found.</Typography>
                            </Box>
                        )
                    )
                }
            </Container>
        </div>
    );
};

export default Books;