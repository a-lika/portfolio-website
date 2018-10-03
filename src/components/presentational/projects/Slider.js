import './style.scss';

import React, { Fragment } from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';



let settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: 'slider',
    cssEase: "ease-out"
    //fade: true,
    // focusOnSelect: true,
    // swipeToSlide: true
};


const SliderImages = ({ images }) => {
    const slides = imagesMap(images);
    return (
        <Fragment>
            <Slider {...settings}>
                {slides}
            </Slider>
        </Fragment>
    )
};

const imagesMap = (images) => (images.map(item => <div key="item"><img src={item} alt="" /></div>));

export default SliderImages;