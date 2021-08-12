import React from 'react';
import useStyles from './style';
import CustomGrid from '../CustomGrid';
import CustomDrawer from '../CustomDrawer';

export default function ProductContainer() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.title}>
                <h1>Nome da Loja</h1>
                <h2>Seus produtos</h2>
            </div>
            <div className={classes.root}>
                <CustomDrawer />
                <CustomGrid />
            </div>
        </>

    );
}