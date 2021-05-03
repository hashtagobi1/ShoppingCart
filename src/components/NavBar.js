import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GiShoppingCart } from 'react-icons/gi'
import { BiHomeHeart } from 'react-icons/bi'
import {FaCookieBite} from 'react-icons/fa'

import { connect } from 'react-redux'
import { loadCurrentItem } from '../state/app'


const NavBar = styled.nav`
display:grid;
grid-template-columns: 1fr 1fr;
margin: 40px auto;
`

const Links = styled.div`
display: flex;
justify-content: space-between;
text-align: right;
background-color:#d8e3e7;
color:white;
`

const IndivLink = styled(Link)`

display:flex;
justify-content: space-between;
margin-left:20px;
font-weight: 400;
padding-bottom: 3px  solid transparent;


&:hover{
    color:black;
    border-color:pink;
    transform:scale(1.5)
}
`

const CartLink = styled(Link)`

display:flex;
justify-content: space-between;
margin-left:20px;
font-weight: 400;
padding-bottom: 3px  solid transparent;


&:hover{
    color:black;
    border-color:pink;
    transform:scale(1.5);
}
`

const Logo = styled(FaCookieBite)`
width: 50px;
height: 50px;
margin-top:-16px;
position:absolute;
`

const HomeLink = styled(Link)`
color:black;


`

const CartNumber = styled.h4`

`


const Navbar = ({ cart, products }) => {

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0;


        cart.forEach(item => {
            count += item.qty
        })

        //   if (count > 10){
        //       setCartCount(count=10)

        //   }
        setCartCount(count);

    }, [cart, cartCount])

    return (
        <NavBar>
            <HomeLink to="/">
                <Logo/>


            </HomeLink>

            <Links>

                {/* <IndivLink to="/"><Logo/></IndivLink> */}
                <IndivLink to="/products">Products</IndivLink>


                <CartLink to="/cart" >
                    <CartNumber>{cartCount} item(s)</CartNumber>
                    <GiShoppingCart />
                </CartLink>
                <IndivLink to="/">Sign Out</IndivLink>


            </Links>

        </NavBar>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        products: state.shop.products,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
