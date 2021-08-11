import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    main: {
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
    },
    error: {
        paddingBottom: 0,
        paddingTop: 5,
        marginBottom: 0,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 48,
        columnGap: 40,
        paddingBottom: 55,
    },
    titulo: {
        paddingTop: 48,
        paddingBottom: 55,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        columnGap: 10
    }
}));

export default function RegisterContainer() {
    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [validatePassword, setValidatePassword] = React.useState(false);
    const { carregando, setCarregando, error, setError } = useContext(ContextoDoLogin);
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
                        <CustomTextfield label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>Seu nome é obrigatório!</span> : "Seu Nome"}
                            id="nome"
                            register={() => register('nome', { required: true })} />
                        <CustomTextfield label={errors.nome?.type === 'required' ? <span style={{ color: 'red' }}>O nome da loja é obrigatório!</span> : "Nome da loja"}
                            id="nome_loja"
                            register={() => register('nome_loja', { required: true })} />
                        <CustomTextfield label={errors.email?.type === 'required' ? <span style={{ color: 'red' }}>Email é obrigatório!</span> : "Email"}
                            id="Email"
                            register={() => register('email', { required: true })} />
                        <PasswordInput label={errors.senha?.type === 'required' ? <span style={{ color: 'red' }}>Senha é obrigatório!</span> : "Senha"}
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
                        <p>Já possui uma conta?</p>
                        <a href="/">ACESSE</a>
                    </div>
                </Typography>
                <Backdrop className={classes.backdrop} open={carregando}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Snackbar open={error} autoHideDuration={6000}>
                    <Alert severity="error">
                        {error}
                    </Alert>
                </Snackbar>
            </Container>
        </div>
    );
}