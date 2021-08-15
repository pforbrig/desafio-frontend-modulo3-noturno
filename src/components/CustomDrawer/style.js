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
        alignItems: "center",
        rowGap: 30,
    },
    iconsfocus: {
        width: 73,
        height: 73,
        display: 'flex',
        alignSelf: 'center',
    },
    icons: {
        width: 53,
        height: 53,
        paddingLeft: 20,
    }
}));