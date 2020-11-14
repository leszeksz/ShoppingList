import React from "react";
import {createStyles, Paper} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const NewItemForm = () =>{
    const styles = makeStyles((Theme)=>
        createStyles({
            form: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap'
            },
            field: {
                margin: "10px 20px"
            },
            unitSelect: {
                minWidth: "100px"
            }
        })
    );
    const classes = styles();

    return(
        <Paper square elevation={3}>
            <Container maxWidth={"md"}>
                <form className={classes.form}>
                    <FormGroup className={classes.field}>
                        <InputLabel>Item</InputLabel>
                        <TextField />
                    </FormGroup>
                    <FormGroup className={classes.form}>
                        <InputLabel>Quantity</InputLabel>
                        <TextField />
                    </FormGroup>
                    <FormGroup className={classes.form}>
                        <InputLabel>Unit</InputLabel>
                        <Select className={classes.unitSelect}>
                            <MenuItem value={"g"}>grams</MenuItem>
                            <MenuItem value={"kg"}>kilograms</MenuItem>
                            <MenuItem value={"item"}>Item(s)</MenuItem>
                        </Select>
                    </FormGroup>
                    <Button variant="contained" color="primary">Add</Button>
                </form>
            </Container>
        </Paper>
    )
}