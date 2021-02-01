import React from "react";
import { FootLinks as FooterLinks} from './footer-links'
import {Footer as Foot} from '../css/layout'

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Foot>
      {/*<Social />*/}
      <FooterLinks />
      <h5 style={{letterSpacing: '1.3px',margin: '0',marginBottom:'0.5rem',color: '#999'}}>&copy;{date}&nbsp;FightSync Media</h5>
    </Foot>
  )
}
