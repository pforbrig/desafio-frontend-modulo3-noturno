import React from 'react';
import useStyles from './style';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ClearIcon from '@material-ui/icons/Clear';

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
                    <ListItem button >
                        <StorefrontIcon className={classes.icons} />
                    </ListItem>
                    <ListItem button >
                        <AccountCircleIcon className={classes.icons} />
                    </ListItem>
                    <ListItem button >
                        <ClearIcon className={classes.icons} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}