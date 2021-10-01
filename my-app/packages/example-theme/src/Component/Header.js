import React from 'react';
import {connect} from 'frontity';
import Link from './Link'
const Header = () =>{
    

    return(
        <>
            <Link href = '/'>Inicio</Link>//
            <Link href = '/2021/08/20/cuatro-anos-despues/'>nature</Link>//
            <Link href = '/cursos'>Cursos</Link>//
        </>
        
    )
}

export default connect(Header);