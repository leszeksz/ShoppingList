import React from "react";
import {Product} from "../models/Product";
import {Container} from "@material-ui/core";

export const ItemList = ({items}: {items: Product[]}) => {
    return (
      <Container maxWidth={"md"}>
          <List>

          </List>
      </Container>
    );
}