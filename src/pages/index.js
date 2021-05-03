import React, { useState } from "react"
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import {FaUserLock} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/Ri'

const Wrapper = styled.div`
margin: auto;

width: 768px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    min-height:100vh;
`

const AuthBox = styled.div`
 width: 100%;
height: 100%;
padding: 20px;
background-color: white;
border-radius: 4px;
box-shadow: 0 8px 16px rgba(0,0,0,.3);

`

const SignInHeader = styled.h3`
color:#767A7A;
text-align:center;
margin-bottom:1.5em;
`

const InputContainer = styled.div`
position: relative;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;

`

const SpanEle = styled.span`
background:red;
display:flex;
justify-content: center;
margin-bottom:16px;
z-index: 100;
top: 0;
  left: 0;
  width: 100%;
  position: absolute;

`
const ITag = styled.span`
display:flex;
justify-content: flex-start;
flex-direction:row-reverse;

margin-left:90%;
z-index: 100;
bottom: 200;
  right: 100;
  position: absolute;

`

const Label = styled.label`
  label:after{
    content: 'looks good';
    color: green;
  }

`
const NameInput = styled.input`
width: 100%;
height: 6vh;

:focus{
    outline: none !important;
    border: 1px solid black;
    box-shadow: 1px 0px 1px 1px rgba(0,0,0,0.2);
  }
:valid{
  border: 1px solid green;

}

:invalid{
  border: 1px solid red;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.2);
 
  }

`
const PasswordInput = styled.input`
width: 100%;
height: 6vh;

:focus{
  outline: none !important;
    border: 1px solid black;
    box-shadow: 1px 0px 1px 1px rgba(0,0,0,0.2);
  }

    `

const PasswordHelp = styled.div`

`

const ButtonBox = styled.div`
    
    padding: 20px;
    display:flex;
    justify-content: space-between;
    align-items: space-between; 
    
`

const Checkbox = styled.input`

`

const TheForm = styled.form`
`

const SmallHeading = styled.a`
display: block;
width: 100%;
font-size:12px;
`

const ButtonLink = styled(Link)`
background-color: #3C8DBC;
color:white;
padding: 12px;
width: 15%;
cursor:pointer;
text-align: center;
`

// markup
const IndexPage = ({ }) => {

  const [showError, setShowError] = useState(true)

  const errorHandler = (e) => {
    setShowError(true)
    const str = e.target.value
    const regex =  new RegExp (/\S(.*\S)?$/)

    if(regex.test(str))
    {
      setShowError(false)
    }
  }
  return (
    <>
      <Layout>
        <Wrapper>
          <AuthBox>
            <SignInHeader>Sign in </SignInHeader>
            <TheForm >
              <InputContainer>
              <ITag><FaUserLock/></ITag>

                {showError && <SpanEle>Error! No white spaces before or after your username please.</SpanEle>}
                <NameInput
                  onChange={errorHandler}
                  id="username"
                  type="text"
                  pattern="\S(.*\S)?"
                  required
                  title="No white space before or after username please!"
                  reportValidity
                  placeholder="Username or email address"
                />
                <Label></Label>
              </InputContainer>

              <InputContainer>
              <ITag><RiLockPasswordFill/></ITag>

                <PasswordInput
                  type="password"
                  placeholder="Password" /></InputContainer>

              <ButtonBox>
                <Checkbox
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                <Label for="remember">Keep me signed in</Label>
                <ButtonLink type="submit" to="/products">
                  Login
                </ButtonLink>

              </ButtonBox>
            </TheForm>

            <PasswordHelp>

              <SmallHeading href="/">I forgot my password</SmallHeading>

              <SmallHeading href="/">Resend verification email</SmallHeading>
            </PasswordHelp>
          </AuthBox>

        </Wrapper>

      </Layout>

    </>
  )
}

export default IndexPage