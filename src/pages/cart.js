import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import MasterCardLogo from './MasterCard.png'
import { ImCross } from 'react-icons/im'
import RoundedJaffa from './RoundedJaffa.jpeg'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { adjustQTY, loadCurrentItem, removeFromCart, addOne, minusOne } from '../state/app'

import Popup from 'reactjs-popup';

const Wrapper = styled.div`
margin: 2rem auto;
display:flex;
justify-content:space-between;
width: 100%;
`
const ShopCart = styled.div`
/* background-color: red; */
flex: 0.7 1;
    margin-right: 1rem;

`
const CardDetailsWrapper = styled.div`
color:white;
flex: 0.3 1;
flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    border-radius: 10px;
    background: linear-gradient(203deg, rgba(66,67,76,1) 0%, rgba(44,45,49,1) 54%);
`

const PlusMinusBox = styled.div`
display:flex;
justify-content:center;
`

const Button = styled.div`
background-color: #2D7AED;
 color:white;
padding: 12px;
cursor:pointer;
`

const SexyLine = styled.div`
 
  height:1px;
  background:#717171;
  border-bottom:1px solid grey;
  opacity:0.4;
  margin-top:10px;
`

const SmallText = styled.h6`
color:white;
`

const Title = styled.h3`
color:black;
`

const BankCardAndLogoContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding: 2rem;

`
const BankCard = styled.div`
background: linear-gradient(203deg, rgba(145,146,155,1) 0%, rgba(142,142,151,1) 54%);
color:black;

                height: 150px;
                width: 265px;
                margin-left: -60px;
                display: flex;
                flex-direction: column;
                justify-self: space-between;
                border-radius: 20px;
                padding: 9px 12px 14px 13px;
                background: linear-gradient(-217deg, $dark_dot, $light_dot, #CA7D80);
                opacity: 0.9;

`
const MasterCard = styled.img`
width:4.5rem;
height: 3.6rem;
margin-left: 28px;
margin-right: -28px;
`

const CardVisaLogoWrapper = styled.div`
  filter: grayscale(100%);
  width:64px;
  height:64px;
  box-shadow: 116px -116px 0px -99px rgba(222,0,222,1);

`

const CardDots = styled.div`

display: flex;
color:white;
`
const Dots = styled.div`
    margin: 12px;
 display: flex;
 justify-content: space-between;
 -webkit-text-security:disc;


`
const CardDeets = styled.div`
display: flex;
justify-content: space-between;
`


const CardQuestion = styled.h5`
margin-top:12px;
`
const CardAnswer = styled.h5`
margin-top:0.75rem;
margin-bottom:1rem;
`

const Selection = styled.select`
background: transparent;
    border: none;
color:white;
padding-left:12px;


`

const Option = styled.option`
padding-bottom: 12px;
background: transparent;
    border: none;

`

const ExpirationDateBox = styled.div`
display: flex; 
flex-direction: row;
justify-content: flex-start;

`

const CreditCardDetails = styled.div`
display:flex;
align-items: space-between;


`

const CVVBox = styled.div`
`

const CVV = styled.input`
padding-bottom: 12px;
background: transparent;
    border: none;
    color:white;
    width:100%;


::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`

const ButtonBox = styled.div`
margin-top:12px;
`

const CheckOutButton = styled.button`
background-color: #2D7AED;
 color:white;
 border: none;
padding: 12px;
cursor:pointer;
border-radius:5px;
width:100%;
`

const StuffInCart = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
color:black;
`

const RoundedImage = styled.img`
border-radius: 50%;
width: 128px;
height: 128px;

`

const Heading1 = styled.h1`
padding: 24px 24px 24px 24px;

`

const CartBottomBox = styled.div`
display:flex;
justify-content: space-between;
align-items:space-between;
`
const ContinueShopping = styled.div``
const Subtotal = styled.div``

const Modal = styled(Popup)`

`

const ThePopUp = styled.div`
margin: 12px;
padding: 12px;
color: white;
background:gray;
display:flex;
justify-content: flex-start;
box-shadow: 5px 5px 20px 5px #000000;


`

const Delete = styled(ImCross)`
width: 32px;
height: 32px;

:hover{
  transform: scale(2.5);


    @keyframes rotation {
  from {
      color:red;
    transform: rotate(0deg);
  }
  to {
    color:#c31432;

    transform: rotate(359deg);
  }
}
    animation: rotation 2s infinite linear;
  z-index:100;
}
cursor: pointer;
`

const Paragraph = styled.p`
display:flex;
justify-content: center;
align-items: center;
`

const Cart = ({ cart, products, removeFromCart, adjustQTY, minusOne, addOne, currentItem, loadCurrentItem }) => {


    const minus_One = () => {
        products.map(product =>
        minusOne(product.id, cart.qty)

 
        )
    }
    const add_One = () => {
        products.map(product =>
            addOne(product.id, cart.qty),
            )
    }


    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [cardInput, setcardInput] = useState("");
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [passwordDots, setpasswordDots] = useState();


    useEffect(() => {

        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price;
        })

        setTotalPrice(price)
        setTotalItems(items);


    }, [cart, setTotalItems, setTotalPrice, totalPrice, totalItems])

    const onChangeHandler = (e) => {
        setcardInput(e.target.value)
    }

    const onMonthHandler = (e) => {
        setMonth(e.target.value)

    }
    const onYearHandler = (e) => {
        setYear(e.target.value)


    }
    const onPasswordHandler = (e) => {
        setpasswordDots(e.target.value)


    }


    useEffect(() => {

    }, [cardInput, setcardInput])


    const [open, setOpen] = useState(false);
    const closeModal = () => {



    }
    const popUpHandler = () => {
      setOpen(!open)
      setTimeout(() => {
        setOpen(false);
    }, 5000)
    }



    return (
        <Layout>
            <Wrapper>
                <ShopCart >
                    <Heading1>Shopping Cart</Heading1>
                    {products.map((product) => (
                        <div>

                            {cart.map(item => (
                                <StuffInCart itemData={item} key={item.id}>
                                    <RoundedImage src={RoundedJaffa} />
                                    <Title >{product.title}</Title>
                                    <PlusMinusBox>
                                        <Button onClick={minus_One}>-</Button>
                                        <Paragraph>Quantity: {cart.itemID} </Paragraph>
                                        < Button onClick={add_One}>+</Button>

                                    </PlusMinusBox>
                                    <Title  >
                                        <sup>£</sup>{product.price}
                                    </Title>
                                    <Delete onClick={() => removeFromCart(item.id)} />
                                </StuffInCart>
                            ))}
                        </div>

                    ))}

                    <SexyLine />

                    <CartBottomBox>
                        <Link to="/products">
                            <ContinueShopping>
                                <BsArrowLeft />
                            ContinueShopping

                        </ContinueShopping>
                        </Link>
                        <Subtotal>
                            Subtotal: £{totalPrice}
                        </Subtotal>
                    </CartBottomBox>

                </ShopCart>


                <CardDetailsWrapper>
                    <h2>Card Details</h2>
                    <SmallText>Card Type</SmallText>

                    <BankCardAndLogoContainer>
                        <BankCard>

                            <CardVisaLogoWrapper>
                                <StaticImage src="./VisaLogo.png" />
                            </CardVisaLogoWrapper>
                            <CardDots>
                                <Dots>{passwordDots}</Dots>
                            </CardDots>
                            <CardDeets>
                                <SmallText>{cardInput}</SmallText>
                                <SmallText>{month}/{year}</SmallText>

                            </CardDeets>

                        </BankCard>

                        <MasterCard src={MasterCardLogo} />

                    </BankCardAndLogoContainer>

                    <CardQuestion>
                        Name On Card
                        <CardAnswer>
                            <CVV
                                maxLength="24"
                                onChange={onChangeHandler}
                                placeholder="Please Type Name" />
                        </CardAnswer>
                        <SexyLine />
                    </CardQuestion>

                    <CardQuestion>
                        Card Number
                        <CardAnswer>
                            <CardDots>
                                <CVV
                                onChange={onPasswordHandler}
                                type="password"
                                maxLength="12"/>

                            </CardDots>
                        </CardAnswer>

                        <SexyLine />
                    </CardQuestion>

                    <CardQuestion>
                        Expiration date
                        <CardAnswer>
                            <CreditCardDetails>
                                <ExpirationDateBox>

                                    <Selection onChange={onMonthHandler} >
                                        <Option value=''>mm</Option>
                                        <Option value='01'>January</Option>
                                        <Option value='02'>February</Option>
                                        <Option value='03'>March</Option>
                                        <Option value='04'>April</Option>
                                        <Option value='05'>May</Option>
                                        <Option value='06'>June</Option>
                                        <Option value='07'>July</Option>
                                        <Option value='08'>August</Option>
                                        <Option value='09'>September</Option>
                                        <Option value='10'>October</Option>
                                        <Option value='11'>November</Option>
                                        <Option value='12'>December</Option>
                                    </Selection>
                                    <Selection onChange={onYearHandler} >
                                        <Option value=''>yyyy</Option>
                                        <Option value='21'>2021</Option>
                                        <Option value='22'>2022</Option>
                                        <Option value='23'>2023</Option>
                                        <Option value='24'>2024</Option>
                                        <Option value='25'>2025</Option>
                                    </Selection>

                                </ExpirationDateBox>

                                <CVVBox>
                                    <CardQuestion>CVV</CardQuestion>
                                    <CVV
                                        placeholder="XXX"
                                        maxLength="3"
                                        type="text" />

                                </CVVBox>


                            </CreditCardDetails>
                            <SexyLine />

                            <ButtonBox>
                                <CheckOutButton onClick={popUpHandler}>Check Out
                                
 
                                </CheckOutButton>

                                <Modal open={open}  >
                                    <ThePopUp>
                                        Processing Payment
                                            </ThePopUp>
                                </Modal>
                            </ButtonBox>

                        </CardAnswer>
                    </CardQuestion>

                </CardDetailsWrapper>

            </Wrapper>
        </Layout>

    )
};

const mapStateToProps = state => {
    return {
        products: state.shop.products,
        cart: state.shop.cart,
        currentItem: state.shop.currentItem


    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQTY: (id, value) => dispatch(adjustQTY(id, value)),
        addOne: (itemID, value) => dispatch(addOne(itemID, value)),
        minusOne: (itemID, value) => dispatch(minusOne(itemID, value)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
