import React from 'react';
import {connect} from 'frontity';
import Link from './Link'

import Grid from '@material-ui/core/Grid'
const Header = ({state}) =>{
    
    const data = state.source.get(state.router.link)

    console.log(data);
    return(
      <>
        <Grid container justifyContent = "center">
          <Link m={3} href='/'>Home</Link>
          <Link m={3} href='/gerro'>Perros</Link>
          <Link m={3} href='/gato'>Gatos</Link>
          <Link m={3} href='/dueno'>Dueños</Link>
          
        </Grid>
         
      </>
    )

}

export default connect(Header);