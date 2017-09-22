import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router'
import menuPropTypes from '../propTypes.js'
import styled from 'styled-components'

const Navbar = styled.nav`
    @media screen and (min-width:280px) {
        background-color:#EA2328;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
`

const Brand = styled.div`
    @media screen and (min-width:320px) {
        flex-basis:80%;
        font-size:1.2em;
        text-align-center;
        margin-left:10%;
        padding-top:5px;
        padding-bottom:5px;
        font-weight:bolder;
        display:flex;
        align-items:center;
    }

    @media screen and (min-width:640px) {
        flex-basis:20%;
        margin:0;
    }
`

const Hamburger = styled.div`
    @media screen and (min-width:280px) {
        flex-basis:10%;
        display:flex;
        justify-content:center;
        align-items: center;
        font-size:1.2em;
        color:white;
    }

    @media screen and (min-width:640px) {
        display:none;
    }
`

const Menu = styled.div`
    @media screen and (min-width:280px) {
        flex-basis:100%;
        display: ${props => props.visible ? 'initial' : 'none'};
    }

    @media screen and (min-width: 640px) {
        flex-basis:80%;
    }

    @media screen and (min-width: 1024px) {
        flex-basis:60%;
    }
`

const ItemsList = styled.ul`
    @media screen and (min-width:280px) {
        margin-left:0;
        list-style:none;
        padding: 0;
        margin: 0;
    }

    @media screen and (min-width:640px) {
        display:flex;
        justify-content: space-between;
    }
`

const Item = styled.li`
    @media screen and (min-width:280px) {
        text-decoration:none;
        margin-left:0;
        padding:10px;
        border-top:1px solid white;
        text-align:center;
        color:white;
    }

    @media screen and (min-width:640px) {
        border:none;
    }
`

const StyledLink = styled(Link)`
    @media screen and (min-width:320px) {
        color:white;
        display:block;
}
    @media screen and (min-width:640px) {
        color:white;
        font-weight:bold;
    }
`

const BrandLink = styled.a`
    @media screen and (min-width:280px) {
        color:white;
        margin-left:20%;
     }
`

const LogoutButton = styled.button`
    @media screen and (min-width:280px) {
        color:white;
        background-color:#EA2328;
        font-size:22px;
        border:none;
    }
`


const MenuComponent = ({brand,
                        items,
                        visible,
                        onMenuVisibleToggle,
                        match,
                        router,
                        onLogoutClick}) => {

return (
    <Navbar>
        <Brand>
            <BrandLink href={brand.link}>{brand.text}</BrandLink>
        </Brand>
        <Hamburger onClick={onMenuVisibleToggle} id="menu-toggler">
            <i className="fa fa-bars"></i>
        </Hamburger>
        <Menu visible={visible}>
            <ItemsList>
                {items.map(item =>
                    <Item key={item.link}>
                        <StyledLink to={item.link}>
                            {router.isActive(item.link) ?
                             <i className="fa fa-circle" /> : ''} {item.text}
                        </StyledLink>
                    </Item>
                )}
                <Item onClick={onLogoutClick} id="logout-button">
                    <LogoutButton>
                        <i className="fa fa-window-close"></i>
                    </LogoutButton>
                </Item>

            </ItemsList>



        </Menu>
    </Navbar>)
                        }

MenuComponent.propTypes = menuPropTypes


















export default MenuComponent
