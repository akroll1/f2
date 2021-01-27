import React from 'react'
import {NavLinkLive} from '../css/layout'

const NotFound = () => {
    return (
        <>
            <div style={{margin: '5rem', marginBottom:'0'}}>
                <h1>Page Not Found</h1>
                <h2>Sorry, &#9785; &#65039;- we couldn't find what you
                    <br />were looking for.</h2>
            </div>
            <NavLinkLive style={{fontStyle: 'normal',marginLeft:'4rem'}}to="/">&#8592;&nbsp;Home</NavLinkLive>
        </>
    )
}
export default NotFound