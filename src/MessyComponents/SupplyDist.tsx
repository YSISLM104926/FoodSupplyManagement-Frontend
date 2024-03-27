import React from 'react';
import { Carousel } from 'antd';
import SDimg1 from '../assets/images/b1.jpg'

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: 'white',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const SupplyDist: React.FC = () => (
    <>
        <h1 className="text-center text-3xl font-bold mt-16">Supply Distribution</h1>
        <Carousel autoplay className='mt-12'>
            <h3 style={contentStyle}>
              <img className='rounded-md' src={SDimg1} alt="" /> 
            </h3>
            <h3 style={contentStyle}>
              <img className='rounded-md' src={SDimg1} alt="" /> 
            </h3>
            <h3 style={contentStyle}>
              <img className='rounded-md' src={SDimg1} alt="" /> 
            </h3>
            <h3 style={contentStyle}>
              <img className='rounded-md' src={SDimg1} alt="" /> 
            </h3>
        </Carousel>
    </>
);

export default SupplyDist;