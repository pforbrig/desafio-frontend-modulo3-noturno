import React from 'react';
import useStyles from './style';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ClearIcon from '@material-ui/icons/Clear';
import { useContext } from "react";
import { ContextoDoLogin } from '../../App'
import { useHistory } from 'react-router';

export default function CustomDrawer() {
    const classes = useStyles();
    const { setEstaLogado, setToken } = useContext(ContextoDoLogin);
    const history = useHistory();

    const handleLogout = () => {
        setEstaLogado(false);
        setToken('');
        history.push('/')
    }


    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                style={{ color: '#000000' }}
            >
                <List className={classes.list}>
                    <ListItem button >
                        <StorefrontIcon className={classes.icons} />
                    </ListItem>
                    <ListItem button >
                        <AccountCircleIcon className={classes.icons} />
                    </ListItem>
                    <ListItem button
                        onClick={handleLogout} >
                        <ClearIcon className={classes.icons}
                            onClick={handleLogout} >
                        </ClearIcon>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}