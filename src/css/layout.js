import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const AboveNavigation = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    background: #333;
    border-bottom: 1px solid #9e1212;
    line-height: 50px;
    background: rgb(165,23,0);
    background: linear-gradient(90deg, rgba(158,18,18,1) 1%, rgba(173,8,44,1) 86%);
`;
export const NavLinks = styled(Link)`
    margin-left: 2rem;
    font-size: 22px;
    text-decoration: none;
    display: block;
    padding: 1rem;
    color: #333;
    font-weight: bold;
    &:hover {
        color: #b9413e;
        text-decoration: none;
    }
    @media(max-width: 499px){
        padding: 5px;
        font-size: 1rem;
    }
`;
export const NavLinkLive = styled(Link)`
    color: #9e1212;
    font-weight: bold;
    font-style: italic;
    margin-left: 2rem;
    font-size: 22px;
    text-decoration: none;
    display: block;
    padding: 1rem;
    font-weight: bold;
    &:hover {
        color: #b9413e;
        text-decoration: none;
    }
    @media(max-width: 499px){
        padding: 5px;
        font-size: 1rem;
    }
`;
export const Signin = styled(Link)`
    font-weight: bold;
    font-size: 22px;
    margin-right: 2rem;
    color: #FFF;
    text-decoration: none; 
    &:hover {
        color: #b9413e;
    }
`;
export const Navigation = styled.div`
    width: 100%;
    display: inline-flex;
    list-style: none;
    margin: 0;
    justify-content: flex-start;
    flex-flow: row wrap;
    text-align: center; 
`;
export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const FooterLinks = styled.ul`
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    list-style: none; 
`;
export const FooterLinksLi = styled.li`
    margin: 0.5rem;
`;
export const FooterLinksLiA = styled(Link)`
    font-size: 16px;
    color: #ffffff;
    text-decoration: none;
    &:hover {
        color: #DEDEDE;
    }
`;
export const Layout = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Main = styled.main`
    background: #F9F9F9;
    position: relative;
    width: 100%;
    font-family: Lato, Helvetica Neue;
    display: flex;
    flex-direction: column;
    // min-height: 90vh;
    height: auto;
`;
export const Footer = styled.footer`
    height: 4.5rem;
    position: fixed;
    margin-top: 5rem;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: #CACACA;
    background: #333;
    letter-spacing: 3px;
    text-align: center;
`;