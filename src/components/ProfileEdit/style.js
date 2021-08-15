import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 600,
    },
    title: {
        paddingLeft: 214
    },
    buttons: {
        paddingLeft: 214,
        display: 'flex',
        alignItems: 'center',
        columnGap: 20
    },
    form: {
        paddingLeft: 214
    }
}));