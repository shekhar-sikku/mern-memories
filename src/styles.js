import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        margin: '35px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#3f51b5',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('md')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        }
    }
}));