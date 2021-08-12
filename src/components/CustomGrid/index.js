import React from 'react';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';
import imagem from '../../imagem/Rectangle 4.png'

export default function CustomGrid() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 2, 3].map((value) => (
                        <Grid key={value} item>

                            <Paper className={classes.paper}>
                                <img className={classes.img} alt="imagem do produto" src={imagem} />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DeleteSweepRoundedIcon className={classes.delete} />}
                                >
                                </Button>
                                <Typography gutterBottom variant="subtitle1">
                                    Nome do produto
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Descrição do produto
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Estoque do produto
                                </Typography>
                                <Typography variant="subtitle1">Preco do produto</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}