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
import { AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'


import logo from '../../assets/images/logo-corebiz-preto.svg'
import './style.css'

const HeaderDesktop = props => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return(
        <Row xs='4' id='header-desktop'>
            <Col xs='2'>
                <img src={logo} height={41} width={170} alt={'Logo Corebiz'}/>
            </Col>
            <Col xs='7'>
                <InputGroup>
                    <Input 
                        id='input-desktop'
                        placeholder='O que está procurando?' 
                        style={{fontSize: 13}}
                    />
                    <InputGroupAddon addonType="append">
                        <InputGroupText id='search'>
                            <AiOutlineSearch size={25} style={{}}/>
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
            <Col xs='2'>
                <FiUser size={20}/>
                {' '}
                <span 
                    style={{
                        color: '#7A7A7A',
                        fontWeight: 400,
                        fontSize: 13
                    }}
                >
                    Minha Conta
                </span>
            </Col>
            <Col xs='1'>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                    <DropdownToggle 
                        style={{
                            backgroundColor: 'transparent',
                            color: '#000000',
                            border: 0,
                            content:'none'
                        }}
                        id='carrinho'
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
                    <DropdownMenu right>
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
                            <BsTrash size={18}/> Esvaziar carrinho
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>
    )
}

export default HeaderDesktop