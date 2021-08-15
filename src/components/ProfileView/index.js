import React from 'react';
import useStyles from './style';
import { useContext } from "react";
import { useHistory } from 'react-router';
import { ContextoDoLogin } from '../../App'
import { Button } from '@material-ui/core';
import CustomDrawer from '../CustomDrawer';
import TextField from '@material-ui/core/TextField';

export default function ProfileView() {
    const classes = useStyles();
    const history = useHistory();
    const icon = 'perfil';
    const { perfil } = useContext(ContextoDoLogin);


    return (
        <>
            <div className={classes.title}>
                <h1>{perfil.nome_loja}</h1>
                <h2>Perfil</h2>
            </div>
            <div className={classes.root}>
                <CustomDrawer icon={icon} />
                <div className={classes.inputs}>
                    <TextField
                        label="Seu nome"
                        id="nome"
                        value={perfil.nome} />
                    <TextField
                        label="Nome da loja"
                        id="nome"
                        value={perfil.nome_loja} />
                    <TextField
                        label="E-mail"
                        id="nome"
                        value={perfil.email} />
                </div>
                <div className={classes.buttons}>
                    <Button variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: '#007DFF' }} onClick={() => history.push('/perfil/editar')} >
                        EDITAR PERFIL
                    </Button>
                </div>
            </div>
        </>

    );
}