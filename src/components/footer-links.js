import React from 'react';
import {FooterLinks,FooterLinksLi,FooterLinksLiA} from '../css/layout'

export const FootLinks = () => (
	<FooterLinks>
        <FooterLinksLi>
            <FooterLinksLiA to="api">API</FooterLinksLiA>
        </FooterLinksLi>
        <FooterLinksLi>
            <FooterLinksLiA to="/gyms">Gyms</FooterLinksLiA>
        </FooterLinksLi>
        <FooterLinksLi>
            <FooterLinksLiA to="shows">Shows</FooterLinksLiA>
        </FooterLinksLi>
        <FooterLinksLi>
            <FooterLinksLiA to="/books">Media</FooterLinksLiA>
        </FooterLinksLi>
    </FooterLinks>
);
