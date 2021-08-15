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
import PasswordInput from '../PasswordInput';

export default function ProfileEdit() {
    const classes = useStyles();
    const history = useHistory();
    const icon = 'perfil';
    const [validatePassword, setValidatePassword] = React.useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { setPerfil, perfil, token, carregando, setCarregando, error, setError, handleAlertClose } = useContext(ContextoDoLogin);

    async function editUser(data) {
        setError('');
        if (data.senha !== data.repetirsenha) {
            setValidatePassword(true)
            return
        }
        setCarregando(true)
        console.log(data)
        const resposta = await fetch('http://localhost:3000/perfil', {
            method: "PUT",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token} `
            }
        });
        setCarregando(false);
        const dados = await resposta.json();
        if (resposta.ok) {
            setPerfil(data);
        }
        history.push("/perfil");

        if (!resposta.ok) {
            setError(dados)
        }

    }


    return (
        <>
            <div className={classes.title}>
                <h1>{perfil.nome_loja}</h1>
                <h2>Editar Perfil</h2>
            </div>
            <div className={classes.root}>
                <form className={classes.form}>
                    <CustomDrawer icon={icon} />
                    <CustomTextfield
                        label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>Seu nome é obrigatório!</span> : "Novo Nome"}
                        id="nome"
                        register={() => register('nome', { required: true })} />
                    <CustomTextfield
                        label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>O nome da loja é obrigatório!</span> : "Novo nome da loja"}
                        id="nome_loja"
                        register={() => register('nome_loja', { required: true })} />
                    <CustomTextfield
                        label={errors.email?.type === 'required' ? <span style={{ color: 'red' }}>Email é obrigatório!</span> : "Novo email"}
                        id="Email"
                        register={() => register('email', { required: true })} />
                    <PasswordInput
                        label={errors.senha?.type === 'required' ? <span style={{ color: 'red' }}>Senha é obrigatório!</span> : "Nova Senha"}
                        id="Senha"
                        register={() => register('senha', { required: true })} />
                    <PasswordInput
                        label={errors.repetirsenha?.type === 'required' ? <span style={{ color: 'red' }}>Repita a senha!</span> : "Repita a nova senha"}
                        id="repetirsenha"
                        register={() => register('repetirsenha', { required: true })} />
                </form>
                {validatePassword && <span style={{ color: 'red', paddingTop: 0 }}>Repita a senha corretamente!</span>}
                <div className={classes.buttons}>
                    <a href="/produtos" onClick={() => history.push('/perfil')}>CANCELAR</a>
                    <Button variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: '#007DFF' }} onClick={handleSubmit(editUser)} >
                        EDITAR PERFIL
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