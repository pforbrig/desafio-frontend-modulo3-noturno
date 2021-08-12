import React from 'react';
import useStyles from './style';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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