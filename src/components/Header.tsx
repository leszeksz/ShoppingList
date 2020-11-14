import React from "react";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth={"md"}>
                    <Typography variant={"h6"}>
                        Shopping List
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    )
}