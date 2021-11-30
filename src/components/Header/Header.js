import React from 'react';
import { Container, AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <div className="header">
            <AppBar position="fixed">
                <Container maxWidth="lg">
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Book Store
                        </Typography>
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
                            />
                        </div>
                        <IconButton color="inherit">
                            <ShoppingCartIcon />
                            <sup className={classes.sup}>0</sup>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;