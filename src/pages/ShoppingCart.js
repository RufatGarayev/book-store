import React, { useContext } from 'react';
import CartTable from '../components/Cart/CartTable';
import { Container, Typography, Box, Button } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { BookContext } from "../contexts/BookContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    const { cart } = useContext(BookContext);

    return (
        <div className="cart-content" style={{ padding: "120px 0 100px" }}>
            <Container maxWidth="lg">
                {
                    cart.length > 0 ? (
                        <>
                            <Typography
                                variant="h4"
                                component="div"
                                align="center"
                                style={{ marginBottom: "40px" }}
                            >
                                CART
                            </Typography>
                            <CartTable />
                        </>
                    ) : (
                        <Box
                            align="center"
                            sx={{ padding: "150px 0 121px" }}
                        >
                            <ShoppingCartIcon sx={{ fontSize: "100px" }} />
                            <Typography style={{ margin: "15px 0 20px" }}>
                                Shopping Cart is Empty.
                            </Typography>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    style={{ width: "200px", padding: "8px 10px" }}
                                    startIcon={<KeyboardBackspaceIcon style={{ fontSize: "22px" }} />}
                                >
                                    Back Shopping
                                </Button>
                            </Link>
                        </Box>
                    )
                }
            </Container>
        </div>
    );
};

export default ShoppingCart;