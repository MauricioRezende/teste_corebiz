import React, { useState } from 'react'
import {
    InputGroupText,
    InputGroup,
    InputGroupAddon,
    Input,
    Row,
    Col,
    Badge,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown
} from 'reactstrap'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

import logo from '../../assets/images/logo-corebiz-preto.svg'
import './style.css'

const HeaderMobile = props => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return(
        <Row xl='2' id='header-mobile'>
            <Col xs='4'>
                <AiOutlineMenu size={23}/>
            </Col>
            <Col xs='4'>
                <img src={logo} alt={'Logo Corebiz'}/>
            </Col>
            <Col xs='4' style={{textAlign: 'right'}}>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                    <DropdownToggle 
                        style={{
                            backgroundColor: 'transparent',
                            color: '#000000',
                            border: 0,
                            content:'none'
                        }}
                    >
                    <AiOutlineShoppingCart size={25}/>
                        <Badge
                            style={{
                                backgroundColor: 'red',
                                borderRadius: 10,
                                fontSize: 8
                            }}
                            pill>
                            {props.cart}
                        </Badge>
                    </DropdownToggle>
                    <DropdownMenu  right>
                        <DropdownItem 
                            onClick={() => {
                                props.setCart({qtd: 0})
                                localStorage.removeItem('cart')
                            }}
                            style={{
                                color: '#7A7A7A',
                                fontWeight: 400,
                                fontSize: 13
                            }}
                        >
                            <BsTrash size={18}/> Limpar carrinho
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
            <br />
            <br />
            <Col xs='12'>
                <InputGroup>
                    <Input id='input-mobile' placeholder='O que está procurando?'/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText id='search' style={{}}>
                            <AiOutlineSearch size={25} style={{}}/>
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default HeaderMobile