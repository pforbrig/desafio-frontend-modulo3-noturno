import React from 'react';
import useStyles from './style';
import CustomGrid from '../CustomGrid';
import CustomDrawer from '../CustomDrawer';

export default function ProductContainer() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomDrawer />
            <CustomGrid />
        </div>
    );
}