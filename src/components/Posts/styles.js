import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}));