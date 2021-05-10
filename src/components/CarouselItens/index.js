import React, { useEffect, useState } from 'react'
import { 
        Button,
        Container,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Spinner,
        Row,
        Col,
        Input,
        FormGroup,
        Label
} from 'reactstrap'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { isMobile, isTablet } from "react-device-detect";

import { AuthContext } from '../../providers/auth'
import Stars from './Stars'
import './style.css'

const baseURL = 'https://corebiz-test.herokuapp.com/api/v1/products'

const CarouselItens = () => {
    const [data, setData] = useState([])
    const [dataModal, setDataModal] = useState({})
    const [modal, setModal] = useState(false)
    const [loadImage, setLoadImage] = useState(true)
    const {cart, setCart} = React.useContext(AuthContext)
    const [qtd, setQtd] = useState('')

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    useEffect(() => {
        axios
            .get(baseURL)
            .then(res => {
                setData(res.data)
            })
    },[])

    const toggle = props => {
        setQtd('')
        setDataModal(props)
        setModal(!modal)

    }

    const purchase = () => {
        setCart({qtd: (parseInt(cart.qtd + parseInt(qtd)))})
        localStorage.setItem('cart', (parseInt(cart.qtd + parseInt(qtd))))
        setQtd('')
        setModal(!modal)     
    }

    const _loadImage = () => {
        setLoadImage(false)
    }

    const onChange = evt => {
        setQtd(evt.target.value)
    }

    return (
        <>
            <br />
            <Modal isOpen={modal} >
                <ModalHeader toggle={toggle}>
                    <div className='title-modal'>Excelente escolha!</div>
                </ModalHeader>
                <ModalBody>
                    <Row xs='12'>
                        <Col xs='3'>
                            <img 
                                src={dataModal.imageUrl}
                                width={120}
                                onLoad={_loadImage}
                                alt={dataModal.productName}
                            />
                        </Col>
                        <Col xs='6'>
                            <div 
                                className='name'
                                style={{
                                    paddingTop: 50,
                                    textAlign: 'center',
                                    border: 1,
                                    borderWidth: 1
                                }}
                            >
                                {dataModal.productName}
                            </div>
                        </Col>
                        <Col xs='3'>
                            <FormGroup style={{paddingTop: 20}}>
                                <Label htmlFor="select" className='body-modal'>Quantidade</Label>
                                <Input type="select" name="select" id="select" onChange={onChange}>
                                    <option>{' '}</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>    
                    <div className='body-modal'>
                        Adicione o produto em seu carrinho e continue comprando!
                    </div>
                </ModalBody>
                <ModalFooter>
                    { qtd !== '' && 
                        <Button
                            onClick={purchase}
                            style={{
                                backgroundColor: '#000',
                                fontSize: 12,
                                fontWeight: 700,
                                paddingLeft: 35,
                                paddingRight: 35
                            }}
                        >
                            Adicionar ao carrinho
                        </Button>
                    }
                    { qtd === '' &&
                        <Button
                            style={{
                                backgroundColor: '#7A7A7A',
                                fontSize: 12,
                                fontWeight: 700,
                                paddingLeft: 35,
                                paddingRight: 35
                            }}
                        >
                            Adicionar ao carrinho
                        </Button>
                    
                    }
                    {' '}
                    <Button 
                        onClick={toggle}
                        style={{
                            backgroundColor: '#7A7A7A',
                            fontSize: 12,
                            fontWeight: 700,
                            paddingLeft: 35,
                            paddingRight: 35
                        }}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>

            <Container>
                <div className='best-sellers'>Mais Vendidos</div>
                <hr style={{color: '#C0C0C0', width: 65, height: 5, marginTop: 0, opacity: 1}}/>

                {
                    data.length === 0 &&
                        <div style={{textAlign: 'center'}}>
                            <Spinner style={{ width: '3rem', height: '3rem', }}>{' '}</Spinner>
                        </div>
                }
                
                <Carousel 
                    responsive={responsive}
                    style={{alignContent: 'center'}}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    showDots={isMobile || isTablet ? true : false}
                    autoPlay={isMobile || isTablet ? true : false}
                    infinite={true}
                >
                    {
                        data.map(prod => (
                            <center>
                                <div key={prod.productId} className='product' style={{alignContent: 'center'}}>
                                    <div>
                                        {
                                            loadImage && 
                                            <div style={{textAlign: 'center'}}>
                                                <Spinner style={{ width: '3rem', height: '3rem', }}>{' '}</Spinner>
                                            </div>
                                        }
                                        <img 
                                            src={prod.imageUrl}
                                            width={216}
                                            onLoad={_loadImage}
                                            alt={prod.productName}
                                        />
                                    </div>
                                    <div className='product-info'>
                                        <div className='name'>
                                            {prod.productName}
                                        </div>
                                        <div>
                                            <Stars qtd={prod.stars} />
                                        </div>
                                        {
                                            prod.listPrice !== null &&
                                                <div className='old-price'>
                                                    de R$ {' '}
                                                    {
                                                        prod.listPrice.toString().slice(0,-2) + 
                                                        ',' + 
                                                        prod.listPrice.toString().slice(-2)
                                                    }
                                                </div>
                                        }
                                        {prod.listPrice === null && <br />}
                                        <div className='price'>
                                            por R$ {' '}
                                            {
                                                prod.price.toString().slice(0,-2) + 
                                                ',' + 
                                                prod.price.toString().slice(-2)
                                            }
                                        </div>
                                        <div className='parcel' style={{}}>
                                            {
                                                prod.installments.map(x => (
                                                    <span key={x}>
                                                        ou em {x.quantity}x de R$ 
                                                        {
                                                            x.value.toString().slice(0,-2) + 
                                                            ',' + 
                                                            x.value.toString().slice(-2)
                                                        }
                                                    </span>
                                                ))
                                            }
                                            {
                                                prod.installments.length === 0 && <br />
                                            }
                                        </div>
                                        <Button 
                                            style={{
                                                    backgroundColor: '#000',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    paddingLeft: 35,
                                                    paddingRight: 35,
                                                    borderRadius: 5
                                                }}
                                            onClick={() => toggle(prod)}
                                        >
                                            COMPRAR
                                        </Button>
                                    </div>
                                </div>
                            </center>
                            )
                        )
                    }
                </Carousel>
            </Container>
        </>
    )
}

export default CarouselItens;