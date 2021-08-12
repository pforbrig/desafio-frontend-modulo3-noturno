import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 433,
        width: 232,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        width: 48,
        height: 48,
        borderRadius: 40,
        marginTop: 20,
        marginLeft: 20,
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    delete: {
        color: '#000000',
    },
    img: {
        width: 232,
        height: 240,
    },
}));