import React from 'react'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import NavBar from './NavBar'


const GlobalLayout = styled.div`
max-width: 1200px;
margin: 0 auto;
`

const ContentWrapper = styled.div``
const Footer = styled.footer``


const FooterParagraph = styled.p`  
    text-align: center;
    color: lightgray;
    margin: 40px auto;
`



export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    text-decoration:none;
    /* color:white; */
}

body{
    min-height:100vh;
    background-color: #D2D6DE;
    /* display:flex; */
    /* text-align: center; */
}

`

const Layout = ({ children }) => {
    return (
        <GlobalLayout>
            <GlobalStyle />
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer>
                <FooterParagraph>
                    Copyright (C) The Cake Company 2021
                </FooterParagraph>
            </Footer>
        </GlobalLayout>
    )
}

export default Layout
