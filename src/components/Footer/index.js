import { Container, Row, Col, Button} from 'reactstrap'
import { IoMdMail } from 'react-icons/io'
import { RiHeadphoneFill } from 'react-icons/ri'

import logoCorebiz from '../../assets/images/logo-corebiz-branco.svg'
import logoVtex from '../../assets/images/logo-vtex.svg'

const Footer = () => {
    return(
        <>
            <div style={{backgroundColor: '#000', paddingTop: 50, paddingBottom: 50,}}>
                <Container>
                    <Row xl='3' lg='3' sm='1' xs='1'>
                        <Col xl='4' lg='4' md='12'>
                            <div 
                                style={{
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: '#fff'
                                }}
                            >
                                Localização
                            </div>
                            <hr 
                                style={{
                                    color: '#FFFFFF',
                                    width: 45,
                                    height: 5,
                                    opacity: 1
                                }}
                            />
                            <div 
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 13,
                                    fontWeight: 400,
                                    lineHeight: 2
                                }}
                            >
                                Avenida Andrômeda, 2000. Bloco 6 e 8 
                                <br />
                                Alphavile SP
                                <br />
                                brasil@corebiz.ag
                                <br />
                                +55 11 3090 1039
                            </div>
                        </Col>

                        <Col xl='4' lg='4' md='12' style={{textAlign: 'center', paddingTop: 20}}>
                            <Button 
                                style={{
                                    backgroundColor: '#FFF',
                                    color: '#000',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    padding: 10,
                                    borderRadius: 5,
                                    width: 220
                                }}
                            >
                                <span style={{paddingLeft: 10}}>
                                    <IoMdMail size={22}/>
                                </span>
                                <span style={{paddingLeft: 20, paddingRight: 20}}>
                                    ENTRE EM CONTATO
                                </span>
                            </Button>
                            <br /><br />
                            <Button 
                                style={{
                                    backgroundColor: '#FFF',
                                    color: '#000',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    padding: 10,
                                    borderRadius: 5,
                                    width: 220
                                }}
                            >
                                <Row>
                                    <Col xs='2'>
                                        <span style={{paddingLeft: 10, paddingTop: 15}}>
                                            <RiHeadphoneFill size={24} style={{marginTop: 5}}/>
                                        </span>
                                    </Col>
                                    <Col xs='10'>
                                        FALE COM O NOSSO <br />CONSULTOR ONLINE
                                    </Col>
                                </Row>
                            </Button>
                        </Col>

                        <Col xl='4' lg='4' md='12'>
                            <Row xs='2' style={{paddingTop: '15%', alignContent: ''}}>
                                <Col xs='6' style={{textAlign: 'left', paddingLeft: '15%'}}>
                                    <div 
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 400,
                                            color: '#fff'
                                        }}
                                    >
                                        Created by
                                    </div>
                                    <img src={logoCorebiz} alt={'Logo Corebiz'}/>
                                </Col>
                                <Col xs='6' style={{textAlign: 'right', paddingRight: '15%'}}>
                                    <div 
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 400,
                                            color: '#fff'
                                        }}
                                    >
                                        Powered by
                                    </div>
                                    <img src={logoVtex} style={{width: 80}} alt={'Logo Vtex'}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr style={{color: '#C0C0C0', height: 10, marginTop: 0, marginBottom: 0, opacity: 1}}/>
        </>
    )
}

export default Footer