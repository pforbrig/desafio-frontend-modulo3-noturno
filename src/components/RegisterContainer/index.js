import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './style';
import Button from '@material-ui/core/Button';
import PasswordInput from '../PasswordInput';
import CustomTextfield from '../CustomTextfield';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ContextoDoLogin } from '../../App'
import { useContext } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RegisterContainer() {
    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [validatePassword, setValidatePassword] = React.useState(false);
    const { carregando, setCarregando, error, setError, handleAlertClose } = useContext(ContextoDoLogin);
    const history = useHistory();


    async function registerNewUser(data) {
        setError('');
        if (data.senha !== data.repetirsenha) {
            setValidatePassword(true)
            return
        }
        setCarregando(true)
        console.log(data)
        const resposta = await fetch('http://localhost:3000/cadastro', {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setCarregando(false);
        const dados = await resposta.json();
        history.push("/login");

        if (!resposta.ok) {
            setError(dados)
        }

    }

    return (
        <div className={classes.main}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: 'white', height: '851px', width: '392px', borderRadius: "18px", boxShadow: "0px 6px 28px 5px #0000001F" }}>
                    <div className={classes.titulo}>
                        <Typography component='h1' variant='h5'>Criar uma conta</Typography>
                    </div>
                    <form className={classes.root}>
                        <CustomTextfield
                            label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>Seu nome ?? obrigat??rio!</span> : "Seu Nome"}
                            id="nome"
                            register={() => register('nome', { required: true })} />
                        <CustomTextfield
                            label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>O nome da loja ?? obrigat??rio!</span> : "Nome da loja"}
                            id="nome_loja"
                            register={() => register('nome_loja', { required: true })} />
                        <CustomTextfield
                            label={errors.email?.type === 'required' ? <span style={{ color: 'red' }}>Email ?? obrigat??rio!</span> : "Email"}
                            id="Email"
                            register={() => register('email', { required: true })} />
                        <PasswordInput
                            label={errors.senha?.type === 'required' ? <span style={{ color: 'red' }}>Senha ?? obrigat??rio!</span> : "Senha"}
                            id="Senha"
                            register={() => register('senha', { required: true })} />
                        <PasswordInput
                            label={errors.repetirsenha?.type === 'required' ? <span style={{ color: 'red' }}>Repita a senha!</span> : "Repita a Senha"}
                            id="repetirsenha"
                            register={() => register('repetirsenha', { required: true })} />
                    </form>
                    <div className={classes.error}>
                        {validatePassword && <span style={{ color: 'red', paddingTop: 0 }}>Repita a senha corretamente!</span>}
                    </div>
                    <Button variant="contained" color="primary" style={{ backgroundColor: '#007DFF' }} onClick={handleSubmit(registerNewUser)}>
                        CRIAR CONTA
                    </Button>
                    <div className={classes.login}>
                        <p>J?? possui uma conta?</p>
                        <a href="/">ACESSE</a>
                    </div>
                </Typography>
                <Backdrop className={classes.backdrop} open={carregando}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Snackbar open={error} autoHideDuration={2000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="error">
                        {error}
                    </Alert>
                </Snackbar>
            </Container>
        </div>
    );
}