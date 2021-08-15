import React from 'react';
import useStyles from './style';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useContext } from "react";
import { ContextoDoLogin } from '../../App'
import { useHistory } from 'react-router';
import Loja from '../../imagem/loja.svg'
import Loja2 from '../../imagem/loja2.svg'
import Logout from '../../imagem/logout.svg'
import Perfil from '../../imagem/perfil.svg'
import Perfil2 from '../../imagem/perfil2.svg'

export default function CustomDrawer({ icon }) {
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
                        {icon === 'loja' ? <img src={Loja} alt='loja' className={classes.iconsfocus} /> : <img src={Loja2} alt='loja' className={classes.icons} />}
                    </ListItem>
                    <ListItem button >
                        {icon === 'perfil' ? <img src={Perfil} alt='perfil' className={classes.iconsfocus} onClick={() => history.push('/perfil')} /> : <img src={Perfil2} alt='perfil' className={classes.icons} onClick={() => history.push('/perfil')} />}
                    </ListItem>
                    <ListItem button
                        onClick={handleLogout} >
                        <img src={Logout}
                            alt='logout'
                            className={classes.icons}
                            onClick={handleLogout} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}