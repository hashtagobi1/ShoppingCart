import React from 'react';
import { Zoom } from 'react-slideshow-image';
import styled from 'styled-components'
import JaffaOriginal from '../pages/Jaffa-Original.png'
import JaffaCherry from '../pages/Jaffa-Cherry.jpeg'
import OpenCake from '../pages/OpenCake.jpeg'
import OpenCakeIcon from '../pages/OpenCake.ico'
import { StaticImage } from 'gatsby-plugin-image'



const IndicatorDiv = styled.div`

cursor: pointer;
  padding: 10px;
  text-align: center;
  border: 1px #666 solid;

  &:active{
    color: #fff;
  background: #666;
  }
`

const SlideShow = () => {
    const images = [
        JaffaOriginal,
        // JaffaCherry,
        // OpenCakeIcon
    ];

    const zoomOutProperties = {
        indicators: true,
        scale: 0.4,
        indicators: i => (<IndicatorDiv>{i + 1}</IndicatorDiv>)
    }
    return (
        <div>
            <Zoom {...zoomOutProperties}>
                {images.map((each, index) => <img style={{ objectFit: "cover", width: "100%" }} key={index}  src={each} />)}
            </Zoom>
        </div>
    )
}

export default SlideShow;