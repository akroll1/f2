import React from 'react'
import {Header,Navigation,AboveHeader,Signin} from '../css/layout'
import {Link} from '@reach/router'

export default (props) => {

    return (
        <Header>
            <AboveHeader>
                <Signin style={props.userSub ? {display: 'none'} : {display:'block'}} to="/api/dashboard">Signin</Signin>
            </AboveHeader>
        </Header>
    )
}

