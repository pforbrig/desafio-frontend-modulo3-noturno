import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: 138,
    },
    list: {
        backgroundColor: '#434343',
        height: '100vh',
        paddingTop: 118
    },
    icons: {
        color: 'white',
        width: 73,
        height: 73,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function CustomDrawer() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                style={{ color: '#000000' }}
            >
                <List className={classes.list}>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon className={classes.icons} >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}