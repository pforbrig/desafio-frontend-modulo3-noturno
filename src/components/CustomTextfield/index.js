import React from 'react';
import useStyles from './style';
import TextField from '@material-ui/core/TextField';

export default function CustomTextfield(props) {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id={props.id} label={props.label} {...props.register()} />
        </form>
    );
}