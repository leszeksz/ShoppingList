import React, {useState} from "react";
import {createStyles, Paper} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const NewItemForm = () => {

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('item');
    const [errors, setErrors] = useState<String[]>([]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const tmpErrors: String[] = [];
        if (item.trim().length < 3){
            tmpErrors.push('Item name must be at least 3 characters long');
        }

        if (isNaN(Number(quantity))){
            tmpErrors.push('Quantity must be a number');
        }else if (Number(quantity) < 0){
            tmpErrors.push('Quantity must be a positive number');
        }

        setErrors(tmpErrors);
    }


    const styles = makeStyles((Theme) =>
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

    let errorJsx = null;

    return (
        <Paper square elevation={3}>
            <Container maxWidth={"md"}>
                {errorJsx}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FormGroup className={classes.field}>
                        <InputLabel>Item</InputLabel>
                        <TextField value={item} onChange= {(e: any) => setItem(e.target.value)}/>
                    </FormGroup>
                    <FormGroup className={classes.form}>
                        <InputLabel>Quantity</InputLabel>
                        <TextField value={quantity} onChange={(e: any) => setQuantity(e.target.value)}/>
                    </FormGroup>
                    <FormGroup className={classes.form}>
                        <InputLabel>Unit</InputLabel>
                        <Select className={classes.unitSelect} value={unit} onChange={(e: any) => setUnit(e.target.value)}>
                            <MenuItem value={"g"}>grams</MenuItem>
                            <MenuItem value={"kg"}>kilograms</MenuItem>
                            <MenuItem value={"item"}>Item(s)</MenuItem>
                        </Select>
                    </FormGroup>
                    <Button type={"submit"} variant="contained" color="primary">Add</Button>
                </form>
            </Container>
        </Paper>
    )
}