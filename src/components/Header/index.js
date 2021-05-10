import React from 'react'
import { Container } from 'reactstrap'

import { AuthContext } from '../../providers/auth'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => {
    const { cart, setCart } = React.useContext(AuthContext)
    
    return(
        <Container>
            <HeaderDesktop cart={cart.qtd} setCart={setCart}/>
            <HeaderMobile cart={cart.qtd} setCart={setCart}/>
        </Container>
    )
}

export default Header