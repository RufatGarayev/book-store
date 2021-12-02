import React from 'react';
import { Link } from "react-router-dom";
import { Container, Toolbar, Typography, Box } from '@material-ui/core';
import PaymentImg from '../../assets/img/payment.jpg';

const Footer = () => {
    return (
        <div
            className="footer"
            style={{ height: "64px", backgroundColor: "#3F51B5" }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="footer-items"
                >
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width="390px"
                        className="left-box"
                    >
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography
                                variant="h6"
                                noWrap
                                style={{ color: "#fff" }}
                            >
                                Book Store
                            </Typography>
                        </Link>
                        <Typography
                            variant="subtitle1"
                            noWrap
                            style={{ color: "#fff", marginTop: "3px" }}
                        >
                            © BookStore 2021. All rights reserved
                        </Typography>
                    </Box>
                    <Box className="right-box">
                        <img src={PaymentImg} alt="payment" />
                    </Box>
                </Toolbar>
            </Container>
        </div>
    );
};

export default Footer;