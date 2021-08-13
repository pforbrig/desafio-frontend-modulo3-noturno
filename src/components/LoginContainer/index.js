import React from 'react';
import { Container, Typography, CssBaseline, Button, CircularProgress, Backdrop } from '@material-ui/core/';
import useStyles from './style';
import PasswordInput from '../PasswordInput';
import CustomTextfield from '../CustomTextfield';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { ContextoDoLogin } from '../../App'
import { useContext } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RegisterContainer() {
    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm()
    const history = useHistory();
    const { setPerfil, setEstaLogado, setToken, carregando, setCarregando, error, setError, handleAlertClose } = useContext(ContextoDoLogin);

    async function login(data) {
        setError('');
        setCarregando(true);
        const resposta = await fetch('http://localhost:3000/login', {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const dados = await resposta.json();
        setCarregando(false);

        if (!resposta.ok) {
            setError(dados)
            return
        }

        setToken(dados[0].token);
        setPerfil(dados[0].usuario);
        setEstaLogado(true);
        history.push("/produtos");
    }



    return (
        <div className={classes.main}>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="div" style={{ backgroundColor: 'white', height: '562px', width: '392px', borderRadius: "18px", boxShadow: "0px 6px 28px 5px #0000001F" }}>
                    <div className={classes.titulo}>
                        <Typography component='h1' variant='h5'>Login</Typography>
                    </div>
                    <form className={classes.root}>
                        <CustomTextfield
                            label={errors.email?.type === 'required' ? <span style={{ color: 'red' }}>Digite seu email!</span> : "Email"}
                            id="Email"
                            register={() => register('email', { required: true })} />
                        <PasswordInput
                            label={errors.senha?.type === 'required' ? <span style={{ color: 'red' }}>Digite sua senha!</span> : "Senha"}
                            id="Senha"
                            register={() => register('senha', { required: true })} />
                    </form>
                    <Button variant="contained" color="primary" style={{ backgroundColor: '#007DFF' }} onClick={handleSubmit(login)}>
                        ENTRAR
                    </Button>
                    <div className={classes.cadastro}>
                        <p>Primeira vez aqui?</p>
                        <a href="/cadastro">CRIE UMA CONTA</a>
                    </div>
                    <Backdrop className={classes.backdrop} open={carregando}>
                        <CircularProgress color="inherit" />
                    </Backdrop>

                </Typography>
                <Snackbar open={error} autoHideDuration={100} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="error">
                        {error}
                    </Alert>
                </Snackbar>
            </Container >
        </div >
    );
}