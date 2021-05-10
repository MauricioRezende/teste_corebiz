import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    InputGroup,
    Input,
    Button,
    Form,
    FormGroup,
    FormFeedback,
}from 'reactstrap'
import axios from 'axios'

import './style.css'

const baseURL = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'

const News = () => {
    const [form, setForm] = useState({name: '', email: ''})
    const [errorName, seterrorName] = useState('')
    const [errorNamelBol, seterrorNamelBol] = useState(false)
    const [errorEmail, seterrorEmail] = useState('')
    const [errorEmailBol, seterrorEmailBol] = useState(false)
    const [send, setSend] = useState(false)

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    const register = () => {
        let error = false
        
        if(form.name === '' || form.name.split(' ').length === 1 ){
            seterrorName('Preencha com seu nome completo')
            seterrorNamelBol(true)
            error = true
        }else{
            seterrorNamelBol(false)
        }

        if(form.email === '' || !validateEmail(form.email)){
            seterrorEmail('Preencha com um e-mail válido')
            seterrorEmailBol(true)
            error = true
        }else{
            seterrorEmailBol(false)
        }

        if(!error){
            axios
                .post(baseURL, form)
                .then(res => {
                    console.log('>>> ',res)
                })
            setSend(!send)
        }
    }

    const onChange = field => evt => {
        setForm({
            ...form,
            [field]: evt.target.value
        })
    }

    return(
        <div style={{}} className='news'>
            <Container>
                <Form>
                    { !send &&
                        <>
                            <Row style={{
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: '#333333',
                                    textAlign: 'center'
                                }}
                            >
                                <Col>
                                    Participe de nossas news com promoções e novidades!
                                </Col>
                            </Row>
                            <br />
                            <Row xl='3' lg='3' md='3' sm='1' xs='1'>
                                <Col xl='3' lg='3' md='12' />
                                <Col xl='3' lg='3' md='12'>
                                    <InputGroup>
                                        <Input 
                                            invalid={errorNamelBol}
                                            placeholder='Digite seu nome'
                                            id='name'
                                            className='input'
                                            onChange={onChange('name')}
                                        />
                                        <FormFeedback>{errorName}</FormFeedback>
                                    </InputGroup>
                                </Col>
                                <Col xl='3' lg='3' md='12'>
                                    <FormGroup>
                                        <Input
                                            invalid={errorEmailBol}
                                            placeholder='Digite seu email'
                                            id='email'
                                            className='input'
                                            onChange={onChange('email')}
                                        />
                                        <FormFeedback>{errorEmail}</FormFeedback>
                                </FormGroup>
                                </Col>
                                <Col xl='3' lg='3' md='12'>
                                    <Button
                                        id='buttonParticipar'
                                        onClick={register}
                                        style={{
                                            backgroundColor: '#000',
                                            fontSize: 14,
                                            fontWeight: 700,
                                            paddingLeft: 35,
                                            paddingRight: 35,
                                            height: 48,
                                            borderRadius: 5
                                        }}
                                    >
                                        Eu quero!
                                    </Button>
                                </Col>
                                <Col xl='3' md='12' />
                            </Row>
                        </>
                    }

                    { send &&
                        <>
                            <div style={{textAlign: 'center'}}>
                                <div style={{fontSize: 14, fontWeight: 700}}>
                                    Seu e-mail foi cadastrado com sucesso!
                                </div>
                                <div style={{fontSize: 14, fontWeight: 400}}>
                                    A partir de agora você receberá as novidade e ofertas exclusivas.
                                </div>
                                <br />
                                <Button
                                    id='buttonParticipar'
                                    onClick={register}
                                    style={{
                                        backgroundColor: '#000',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        height: 48,
                                        width: 328
                                    }}
                                >
                                    Cadastrar novo e-mail
                                </Button>
                            </div>
                        </>
                    }
                </Form>
            </Container>
        </div>
    )
}

export default News