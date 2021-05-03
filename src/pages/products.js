import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import { FacebookShareButton, TwitterShareButton, EmailShareButton, EmailIcon, TwitterIcon, FacebookIcon, LinkedinShareButton, LinkedinIcon } from 'react-share'
import JaffaOriginal1 from './Jaffa-Original.jpeg'
import OpenCake from './OpenCake.jpeg'
import SimpleImageSlider from "react-simple-image-slider";
import { connect } from 'react-redux'
import { addToCart, adjustQTY, loadCurrentItem } from '../state/app'
import { GiShoppingCart } from 'react-icons/gi'


// * add cart number
//  * on click, add to cart 
// ! make it pretty -> Asos

const ScreenWrapper = styled.div`

&__body{
  background:#132c33;

}

display:flex;
`


const ProductImage = styled.div`
background:red;
display:flex;

`

const ProductData = styled.div`
background:#51c4d3;
display:flex;
flex-direction:column;
flex-grow:1;
justify-content:space-between;
align-items:center;

h1{
color:black;

}
p{
color:black;

}
h3{
color:black;

}
`

const ShareSection = styled.div`
display:flex;

`
const FlavourButton = styled.button`
background-color: #132c33;
 color:white;
padding: 12px;
/* width: 15%; */
cursor:pointer;
/* text-align: center;  */
`

const MyButton = styled.button`
background: linear-gradient(203deg, rgba(48,179,118,1) 16%, rgba(48,179,60,0.8627450980392157) 73%);

 color:white;
 border: none;
padding: 12px;
/* width: 15%; */
cursor:pointer;
border-radius:5px;
`

const Heading1 = styled.h1`
color:black;

`


const Heading3 = styled.p`
color:black;
display:flex;
justify-content:center;
text-align: justify;
  text-justify: inter-word;
`

const Paragraph = styled.p`
color:black;


`

const ShareDiv = styled.div`

`

const AddToCartSection = styled.div`
display:block;
`

const Products = ({ products, addToCart, loadCurrentItem, adjustQTY, cart }) => {

  const OriginalImages = [
    {
      url: JaffaOriginal1
    },
    {
      url: OpenCake
    }

  ]
  const [input, setInput] = useState()
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty
    })
    setCartCount(count);

  }, [cart, cartCount])

  const swapFlavourHandler = () => {
    console.log("Flavour Swapped!")
  }

  const onChangeHandler = (e) => {


    if (e.target.value == 10) {
      alert("Greedy Bugger! You're only allowed 10 each!")
      setInput(e.target.value);

    } else if (e.target.value == 1) {
      alert("You got to have at least 1 in your basket!")
      setInput(e.target.value);
    }
    setInput(input);

    adjustQTY(products.id, e.target.value)

  }

  const [showInput, setShowInput] = useState(false)

  const showInputHandler = (e) => {

    if(cartCount >= 10){
alert("Greedy Bugger! You're only allowed 10 each!!")
    }

    setShowInput(true)
    addToCart(products.id)

  }

  return (

    <Layout>
      <NavBar />
      <ScreenWrapper>
        <ProductImage>
          <SimpleImageSlider
            width={500}
            height={500}
            images={OriginalImages}
            showNavs={true}
            showBullets={true} />
        </ProductImage>

        {products.map((product) => (
          <ProductData key={product.id} product={product}>

            <Heading1>{product.title}</Heading1>
            <Paragraph>£{product.price}.00</Paragraph>
            <Heading3>{product.description}</Heading3>
            <AddToCartSection>
              <MyButton onClick={showInputHandler}
              >Add To Cart!
           <GiShoppingCart />
              </MyButton>
              {showInput &&
                <input
                  min="1"
                  max="10"
                  type="number"
                  value={cartCount}
                  onChange={onChangeHandler}
                />
              }
            </AddToCartSection>
            <FlavourButton onClick={swapFlavourHandler}>ChangeFlavour</FlavourButton>
            <ShareSection>
              <ShareDiv>
                <TwitterShareButton title="Hey Guys, Check out this cool company!" url="https://www.mobiliseglobal.com/" hashtags={["TeleCommunications", "Tech", "JuniorFrontendDev "]} via="DigitalGradsUK">
                  <TwitterIcon round={true} size={32} />
                </TwitterShareButton>
              </ShareDiv>
              <ShareDiv>
                <FacebookShareButton url="https://www.mobiliseglobal.com/" quote="Hey Guys, Check out this cool company" hashtag="#Telecommunication">
                  <FacebookIcon round={true} size={32} />
                </FacebookShareButton>
              </ShareDiv>
              <ShareDiv>
                <LinkedinShareButton url="https://www.mobiliseglobal.com" title="New Telecommunicatinos" summary="Click to see what they are doing" source="google.com">
                  <LinkedinIcon round={true} size={32} />
                </LinkedinShareButton>
              </ShareDiv>
              <ShareDiv>
                <EmailShareButton subject="Re: Mobiise Feedback" body="Dear Obi, we hope this email finds you well">
                  <EmailIcon round={true} size={32} />
                </EmailShareButton >
              </ShareDiv>
            </ShareSection>
          </ProductData>
        ))}

      </ScreenWrapper>

    </Layout>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    adjustQTY: (id, value) => dispatch(adjustQTY(id, value))

  }
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)