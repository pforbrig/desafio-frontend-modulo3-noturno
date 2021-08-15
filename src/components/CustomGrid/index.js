import React from 'react';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';
import imagem from '../../imagem/Rectangle 4.png'
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useContext, useState } from "react";
import { ContextoDoLogin } from '../../App'

export default function CustomGrid({ produtos }) {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const { setProdutoAtual, produtoAtual, token, setError, setCarregando } = useContext(ContextoDoLogin);

    const handleClickOpen = (e) => {
        setOpen(true);
        setProdutoAtual(e)
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleDelete() {
        setCarregando(true);
        const resposta = await fetch(`http://localhost:3000/produtos/${produtoAtual}`, {
            method: "DELETE",
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
            return
        }

        setOpen(false);
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid className={classes.root} container spacing={2}>
                        {produtos.length > 1 ? produtos.map((produto) => (
                            <Grid key={produto.id}>
                                <Paper className={classes.paper} >
                                    <img className={classes.img} alt="imagem do produto" src={imagem} />
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        id={produto.id}
                                        onClick={(e) => handleClickOpen(e.target.id)}
                                        startIcon={<DeleteSweepRoundedIcon
                                            className={classes.delete}
                                            id={produto.id}
                                            onClick={(e) => handleClickOpen(e.target.id)}
                                        />}
                                    >
                                    </Button>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"Remover produto do catálogo?"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Essa ação não poderá ser desfeita.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: '#007DFF' }} onClick={handleClose}>
                                                MANTER PRODUTO
                                            </Button>
                                            <Button variant="contained" color="secondary" style={{ marginTop: 20 }} onClick={handleDelete} autoFocus>
                                                REMOVER
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <div className={classes.titleproduct}>
                                        <Typography gutterBottom variant="subtitle1">
                                            {produto.nome}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {produto.descricao}
                                        </Typography>
                                    </div>
                                    <div className={classes.product}>
                                        <Typography variant="body2" color="textSecondary">
                                            {produto.estoque} UNIDADES
                                        </Typography>
                                        <Typography variant="subtitle1">R$ {produto.preco / 100}</Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        )) : <h1>V</h1>}
                    </Grid>
                    <Button variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: '#007DFF' }} onClick={() => history.push('/produtos/novo')} >
                        ADICIONAR PRODUTO
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}