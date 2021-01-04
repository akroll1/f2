import React from 'react'
import {Footer} from './footer'
import Header from './header'
import {Main,Layout} from '../css/layout'

export default ({children}) => {
    return (
        <Layout>
            <Header />
            <Main>{children}</Main>
            <Footer/>
        </Layout>



    )
}