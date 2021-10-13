import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Grid, Button } from '@material-ui/core';

function Header() {
    return (
    <Toolbar>
    <Grid container >
    <Button  ><Link to="/">Movies</Link></Button>
        <Grid xl >
         
        </Grid>
        <Grid xs>
            <Link to="/upcomming"><Button  >Upcomming</Button></Link>
            <Link to="/popular"><Button  >Popular</Button></Link>
            <Link to="/toprated"><Button>Top Rated</Button></Link>
        </Grid>
        </Grid>
        </Toolbar>
    )
}
export default Header;