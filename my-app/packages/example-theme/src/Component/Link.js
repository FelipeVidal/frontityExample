import React from 'react';
import {connect} from 'frontity';
import Button from './Button';
const Link = ({href,actions,children}) => {
    return(
        <Button  m={2}  variant="contained"  color="primary" href = {href}
            onClick = { event =>{
            event.preventDefault();
            actions.router.set(href)}
            }>
            {children}
        </Button>
    );
}

export default connect(Link);