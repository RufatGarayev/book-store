import React, { useContext } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from 'react-toastify';
import { BookContext } from "../../contexts/BookContext";

const Book = ({ book }) => {
    const { addBook, cart } = useContext(BookContext);
    const sameIsbn13 = cart.find(cartBook => cartBook.isbn13 === book.isbn13);

    return (
        <Card sx={{ maxWidth: 345, margin: "13px 0px" }}>
            <CardActionArea sx={{ padding: "0 10px 20px" }}>
                <CardMedia
                    component="img"
                    height="350"
                    image={book.image}
                    alt={book.title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        align="center"
                    >
                        {book.title.substr(0, 17) + "..."}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        align="center"
                        style={{ fontWeight: "700" }}
                    >
                        {book.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        style={{ width: "100%", padding: "8px 10px" }}
                        endIcon={<ShoppingCartIcon style={{ fontSize: "15px", marginBottom: "2px" }} />}
                        onClick={() => {
                            addBook(book);
                            toast.success('"' + book.title + '" added to the Cart');
                        }}
                        disabled={sameIsbn13}
                    >
                        Add To Cart
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default Book;