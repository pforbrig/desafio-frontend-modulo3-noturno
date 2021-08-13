import React from 'react';
import useStyles from './style';
import { useContext } from "react";
import { useHistory } from 'react-router';
import { ContextoDoLogin } from '../../App'
import CustomTextfield from '../CustomTextfield';
import { Backdrop, Snackbar, CircularProgress, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import CustomDrawer from '../CustomDrawer';

export default function ProductContainer() {
    const classes = useStyles();
    const history = useHistory();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { perfil, token, carregando, setCarregando, error, setError } = useContext(ContextoDoLogin);

    async function addNewProduct() {
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
                <h2>Adicionar Produto</h2>
            </div>
            <div className={classes.root}>
                <form className={classes.form}>
                    <CustomDrawer />
                    <CustomTextfield
                        label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>Seu nome é obrigatório!</span> : "Seu Nome"}
                        id="nome"
                        register={() => register('nome', { required: true })} />
                    <CustomTextfield
                        label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>O nome da loja é obrigatório!</span> : "Nome da loja"}
                        id="nome_loja"
                        register={() => register('nome_loja', { required: true })} />
                    <CustomTextfield
                        label={errors.email?.type === 'required' ? <span style={{ color: 'red' }}>Email é obrigatório!</span> : "Email"}
                        id="Email"
                        register={() => register('email', { required: true })} />
                </form>
            </div>
            <Button variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: '#007DFF' }} onClick={handleSubmit(addNewProduct)} >
                ADICIONAR PRODUTO
            </Button>
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