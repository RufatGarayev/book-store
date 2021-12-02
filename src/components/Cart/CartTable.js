import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { toast } from 'react-toastify';
import { Container } from '@mui/material';
import { BookContext } from "../../contexts/BookContext";

const CartTable = () => {
    const { cart, removeBook } = useContext(BookContext);

    return (
        <div className="cart-table">
            <Container maxWidth="md">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">Book</TableCell>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                cart.map((book) => (
                                    <TableRow
                                        key={book.isbn13}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    removeBook(book.isbn13);
                                                    toast.error('"' + book.title + '" removed from the Cart.');
                                                }}
                                            >
                                                <DeleteIcon style={{ color: "#0d6efd" }} />
                                            </button>
                                        </TableCell>
                                        <TableCell align="center">
                                            <div className="book-img" style={{ height: "120px" }}>
                                                <img
                                                    src={book.image}
                                                    alt={book.title}
                                                    className="h-100"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">{book.title}</TableCell>
                                        <TableCell align="center">{book.price}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default CartTable;