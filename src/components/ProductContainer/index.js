import React from 'react';
import useStyles from './style';
import { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router';
import { ContextoDoLogin } from '../../App'
import CustomGrid from '../CustomGrid';
import CustomDrawer from '../CustomDrawer';
import { Backdrop, Snackbar, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export default function ProductContainer() {
    const classes = useStyles();
    const history = useHistory();
    const { perfil, token, carregando, setCarregando, error, setError } = useContext(ContextoDoLogin);
    const [produtos, setProdutos] = useState('');

    useEffect(() => {
        getProductsApi();
    }, [])

    async function getProductsApi() {
        setError('');
        setCarregando(true);
        const resposta = await fetch('http://localhost:3000/produtos', {
            method: "GET",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token} `
            }
        });
        const dados = await resposta.json();
        setCarregando(false);
        setProdutos(dados);

        if (!resposta.ok) {
            setError(dados)
            history.push('/')
            return
        }
    }


    return (
        <>
            <div className={classes.title}>
                <h1>{perfil.nome_loja}</h1>
                <h2>Seus produtos</h2>
            </div>
            <div className={classes.root}>
                <CustomDrawer />
                <CustomGrid produtos={produtos} />
            </div>
            <Backdrop className={classes.backdrop} open={carregando}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={error} autoHideDuration={6000}>
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </>

    );
}