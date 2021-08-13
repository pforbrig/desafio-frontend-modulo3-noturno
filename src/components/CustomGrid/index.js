import React from 'react';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';
import imagem from '../../imagem/Rectangle 4.png'
import { useHistory } from 'react-router-dom';

export default function CustomGrid({ produtos }) {

    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {produtos.length > 0 ? produtos.map((produto) => (
                            <Grid key={produto.id} item>
                                <Paper className={classes.paper}>
                                    <img className={classes.img} alt="imagem do produto" src={imagem} />
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteSweepRoundedIcon className={classes.delete} />}
                                    >
                                    </Button>
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
                        )) : <h1>Você ainda não tem produtos, cadastre um produto!</h1>}
                    </Grid>
                    <Button variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: '#007DFF' }} onClick={() => history.push('/produtos/novo')} >
                        ADICIONAR PRODUTO
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}