import React from 'react'
import {Footer} from './footer'
import Header from './header'
import {Main,Layout as LayoutX} from '../css/layout'

 const Layout = ({children}) => {
    return (
        <LayoutX>
            <Header />
            <Main>{children}</Main>
            <Footer/>
        </LayoutX>
    )
}
export default Layout