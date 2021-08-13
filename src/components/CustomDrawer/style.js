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
        paddingTop: 118,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 30,
    },
    icons: {
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));