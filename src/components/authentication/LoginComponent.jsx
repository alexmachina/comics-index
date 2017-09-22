import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
    @media screen and (min-width:280px) {
        width:100%;
        height:100%;
        display:flex;

        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
    }
`,

      LoginForm = styled.form`
          @media screen and (min-width:280px) {
              flex-basis:33%;
              display: flex;
              flex-wrap:wrap;
          }

`,
      BrandBox = styled.header`
          @media screen and (min-width:280px) {
              flex-basis:100%;
              display:flex;
              justify-content:center;
          }
`,
      Brand = styled.h1`
`,
      UsernameField = styled.input`
          @media screen and (min-width:280px) {
              flex-basis:100%;
          }
`,

      PasswordField = styled.input`
          @media screen and (min-width:280px) {
            flex-basis:100%;
            margin-top:10px;
          }
`,
      LoginButton = styled.button`
          @media screen and (min-width:280px) {
              flex-basis:100%;
              background-color: #252525;
              color:white;
              margin-top:10px;
              height:35px;
              border:none;
          }

`,
      ErrorMessage = styled.span`
          @media screen and (min-width:280px) {
              flex-basis:100%;
              color: red;
          }
`,
      LoginComponent = ({user, onUserPropChange, errorMessage, onSubmit, isLoading}) => (
          <Container>
            <LoginForm onSubmit={(e) => {
                  e.preventDefault()
                  onSubmit(user)
              }}>
              <BrandBox>
                <Brand>HQIndex 0.1</Brand>
              </BrandBox>

              <UsernameField
                id="username-input"
                placeholder="Username"
                onChange={(e) => onUserPropChange('username', e.target.value)}
                value={user.username}
                />
                <PasswordField
                  id="password-input"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => onUserPropChange('password', e.target.value)}
                  value={user.password}
                  />
                  {isLoading ? <p>Loading...</p> : null}
                  <LoginButton id="submit-button" type="submit">Login</LoginButton>
                  <ErrorMessage>{errorMessage}</ErrorMessage>

            </LoginForm>
          </Container>

      )
LoginComponent.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string
    }),
    onUserPropChange: PropTypes.func,
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.func
}

export default LoginComponent
