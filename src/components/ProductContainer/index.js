import React from 'react';
import useStyles from './style';
import CustomGrid from '../CustomGrid';

export default function ProductContainer() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomGrid />
        </div>
    );
}