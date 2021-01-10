import React from 'react'
import {Header as HeaderX,Navigation,AboveNavigation,NavLinks,Signin,NavLinkLive} from '../css/layout'

const Header = (props) => (
    <HeaderX>
        <AboveNavigation>
            <Signin style={props.userSub ? {display: 'none'} : {display:'block'}} to="/api/dashboard">Signin</Signin>
        </AboveNavigation>
        <Navigation>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/news">News</NavLinks>
            <NavLinks to="/boxers">Boxers</NavLinks>
            <NavLinkLive to="/live">Live</NavLinkLive>
        </Navigation>
    </HeaderX>
)
export default Header
