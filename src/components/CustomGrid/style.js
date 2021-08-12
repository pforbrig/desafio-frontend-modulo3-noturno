import { makeStyles } from "@material-ui/core";
import { getByDisplayValue } from "@testing-library/react";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 433,
        width: 232,
        borderRadius: 20,
        display: 'flex'
    },
    button: {
        width: 48,
        height: 48,
        borderRadius: 40,
        marginTop: 20,
        marginLeft: 20,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    delete: {
        color: '#000000',
    }
}));