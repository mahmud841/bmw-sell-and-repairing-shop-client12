import { Container, Typography } from '@material-ui/core';
import React from 'react';
import banner1 from '../../../image/banner/banner1.jpg'
import banner2 from '../../../image/banner/banner2.jpg'
import banner3 from '../../../image/banner/banner3.jpg'
import Carousel from 'react-material-ui-carousel';

const carouselData = [
    {
        img: banner1,
        titleText: 'X4 M Sports Activity Coupe®',
        slugText: 'Experience the thrilling power of M in the body of a Sports Activity Coupe®',
        textPosition: 'left'
    },
    {
        img: banner2,
        titleText: 'X2 Sports Activity Coupe',
        slugText: 'The most rebellious member of the X family.',
        textPosition: 'center'
    },
    {
        img: banner3,
        titleText: 'X1 Sports Activity Vehicle',
        slugText: 'Red and black sport cars racing on the highway',
        textPosition: 'right'
    },
]
const Banner = () => {
    return (
        <Carousel
            animation="slide"
            indicators={false}
        >
            {
                carouselData.map((item, i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    );
};
const CarouselItem = ({ item }) => {
    const { img, titleText, slugText, textPosition } = item
    const bannerStyle = {
        background: `url(${img}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        height: 'calc(100vh - 64px)',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff'
    }
    const slugStyle = {
        background: '#202C45',
        display: 'inline-block',
        borderLeft: '4px solid #F2184F',
        borderRight: '3px solid #F2184F',
        borderRadius: 40,
        padding: '0 20px',
        marginBottom: 10,
        fontSize: 'calc(1vmax + 10px)'
    }

    return (
        <section style={bannerStyle}>
            <Container style={{ textAlign: textPosition }}>
                <Typography style={{ fontSize: 'calc(3vmax + 10px)' }} variant="h3">{titleText}</Typography>
                <Typography variant="h3" style={slugStyle}>{slugText}</Typography>
                <Typography style={{ fontSize: 'calc(1vmax + 10px)' }} variant="body1">
                    We provides always best Car & repair services for our clients. Our Main goal is to  <br />
                    try to achieve our client's trust and satisfaction.
                </Typography>
            </Container>
        </section>
    )
}
export default Banner;