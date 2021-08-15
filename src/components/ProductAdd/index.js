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
    const icon = 'loja';
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { perfil, token, carregando, setCarregando, error, setError, handleAlertClose } = useContext(ContextoDoLogin);

    async function addNewProduct(data) {
        setError('');
        setCarregando(true);
        const resposta = await fetch('http://localhost:3000/produtos', {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token} `
            },
            body: JSON.stringify(data),
        });
        const dados = await resposta.json();
        setCarregando(false);

        if (!resposta.ok) {
            setError(dados)
            return
        }
        history.push('/produtos');
    }


    return (
        <>
            <div className={classes.title}>
                <h1>{perfil.nome_loja}</h1>
                <h2>Adicionar Produto</h2>
            </div>
            <div className={classes.root}>
                <form className={classes.form}>
                    <CustomDrawer icon={icon} />
                    <CustomTextfield
                        label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>O nome do produto é obrigatório!</span> : "Nome do Produto"}
                        id="nome"
                        register={() => register('nome', { required: true })} />
                    <CustomTextfield
                        label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>O preço é obrigatório!</span> : "Preço"}
                        id="preco"
                        register={() => register('preco', { required: true })} />
                    <CustomTextfield
                        label={errors.email?.type === 'required' ? <span style={{ color: 'red' }}>A quantidade em estoque é obrigatória!</span> : "Estoque"}
                        id="estoque"
                        register={() => register('estoque', { required: true })} />
                    <CustomTextfield
                        label={errors.email?.type === 'required' ? <span style={{ color: 'red' }}>A eescrição do produto é obrigatório!</span> : "Descrição do produto"}
                        id="descricao"
                        register={() => register('descricao', { required: true })} />
                    <CustomTextfield
                        label='Imagem'
                        id="Imagem"
                        register={() => register('imagem')} />
                    <CustomTextfield
                        label='Categoria'
                        id="Categoria"
                        register={() => register('categoria')} />
                </form>
                <div className={classes.buttons}>
                    <a href="/produtos" onClick={() => history.push('/produtos')}>CANCELAR</a>
                    <Button variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: '#007DFF' }} onClick={handleSubmit(addNewProduct)} >
                        ADICIONAR PRODUTO
                    </Button>
                </div>
            </div>
            <Backdrop className={classes.backdrop} open={carregando}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={error} autoHideDuration={2000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </>

    );
}