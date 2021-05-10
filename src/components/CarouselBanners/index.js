import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './style.css'
import banner from '../../assets/images/banner-3.jpg'

const CarouselBanners = () => {
    return (
        <>
            <br />
            <Carousel 
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
            >
                <div>
                    <img src={banner} className='image-banner' alt={'Banner 1'}/>
                    <div className="legend" style={{textAlign: 'left',}}>
                        <p className='text-smaller' >Olá, o que você está buscando?</p>
                        <p className='text-bigger' >Criar ou migrar seu e-commerce?</p>
                    </div>
                </div>
                <div>
                    <img src={banner} className='image-banner' alt={'Banner 2'}/>
                    <div className="legend" style={{textAlign: 'left',}}>
                        <p className='text-smaller' >Olá, o que você está buscando?</p>
                        <p className='text-bigger' >Criar ou migrar seu e-commerce?</p>
                    </div>
                </div>
                <div>
                    <img src={banner} className='image-banner' alt={'Banner 3'}/>
                    <div className="legend" style={{textAlign: 'left',}}>
                        <p className='text-smaller' >Olá, o que você está buscando?</p>
                        <p className='text-bigger' >Criar ou migrar seu e-commerce?</p>
                    </div>
                </div>
                <div>
                    <img src={banner} className='image-banner' alt={'Banner 4'}/>
                    <div className="legend" style={{textAlign: 'left',}}>
                        <p className='text-smaller' >Olá, o que você está buscando?</p>
                        <p className='text-bigger' >Criar ou migrar seu e-commerce?</p>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default CarouselBanners;