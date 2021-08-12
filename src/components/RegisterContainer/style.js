import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    main: {
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
    },
    error: {
        paddingBottom: 0,
        paddingTop: 5,
        marginBottom: 0,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 48,
        columnGap: 40,
        paddingBottom: 55,
    },
    titulo: {
        paddingTop: 48,
        paddingBottom: 55,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        columnGap: 10
    }
}));