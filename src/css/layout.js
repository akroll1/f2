import styled from '@emotion/styled'
import {Link} from '@reach/router'

export const AboveHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    background: #333;
    border-bottom: 1px solid #9e1212;
    line-height: 50px;
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
    list-style: none;
    margin: 0;
    justify-content: flex-start;
    flex-flow: row wrap;
    text-align: center; 
`;
export const Header = styled.header`
    display: flex;
    flex-direction: row;
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
    margin: 1rem;
`;
export const FooterLinksLiA = styled(Link)`
    font-size: 18px;
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
    padding: 1%;
    margin: 1%;
    display: flex;
    flex-direction: column;
    min-height: 90vh;
`;
export const Footer = styled.footer`
    width: 100%;
    bottom: 0;
    padding: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: #CACACA;
    background: #333;
    letter-spacing: 3px;
    text-align: center;
`;