import React from "react";
import { FootLinks as FooterLinks} from './page-components/footer-links'
import {Footer as Foot} from '../css/layout'

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Foot>
      {/*<Social />*/}
      <FooterLinks />
      <h5 style={{marginTop: '0',color: '#999'}}>&copy;{date}&nbsp;FightSync Media</h5>
    </Foot>
  )
}
