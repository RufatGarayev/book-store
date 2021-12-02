import React, { useContext } from 'react';
import { Container, AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import useStyles from './styles';
import { BookContext } from "../../contexts/BookContext";

const Header = () => {
    const classes = useStyles();
    const { cart, searchBook } = useContext(BookContext);

    return (
        <div className="header">
            <AppBar position="fixed">
                <Container maxWidth="lg">
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Book Store
                            </Typography>
                        </Link>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={searchBook}
                            />
                        </div>
                        <Link to="/cart">
                            <IconButton style={{ color: "#fff" }}>
                                <ShoppingCartIcon />
                                <sup className={classes.sup}>{cart.length}</sup>
                            </IconButton>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;