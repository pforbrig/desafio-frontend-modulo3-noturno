import React from 'react';
import useStyles from './style';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';

export default function CustomGrid() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 2, 3].map((value) => (
                        <Grid key={value} item>

                            <Paper className={classes.paper}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DeleteSweepRoundedIcon className={classes.delete} />}
                                >
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}