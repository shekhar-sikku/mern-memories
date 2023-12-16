/* eslint-disable no-unused-vars */
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import memories from '../../assets/memories.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const user = null;

    return (
        <AppBar position='static' color='inherit' className={classes.appBar}>
            <div className={classes.brandContainer}>
                <Typography variant='h2' align='center' className={classes.heading} component={Link} to='/'>
                    Memories
                </Typography>
                <img src={memories} alt='memories' height={50} className={classes.image} />
            </div>
        </AppBar>
    )
}

export default Navbar;