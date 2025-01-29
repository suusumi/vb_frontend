import * as React from "react";
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <AppBar position="static"  sx={{ margin: 0, padding: 0 }}>
            <Container>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{flexGrow: 1, textDecoration: "none", color: "inherit"}}
                    >
                        Тестовое
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Главная
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
