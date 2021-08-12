import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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