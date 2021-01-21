import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const NewsButton = styled(Link)`
    font-weight: bold;
    margin-top: 0.3rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 40%;
    font-size: 1.2rem;
    height: 2rem;
    text-decoration: none;
    background: #d22509;
    color: #FFF;
    &:hover {
        background: #ff2805;
        -webkit-transition: background 0.2s ease-in-out;
        -moz-transition: background 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
        color: #FFF;
    }
`;
export const SearchWrapper = styled.div`
    width: 25%;
    margin: auto;
`;
export const NewsCard = styled.div`
    margin-top: 1rem;
    box-shadow: 0 0.05rem 0.15rem rgba(0,0,0,.2);
    background: #FFF;
    flex-wrap: nowrap;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
    border-bottom: 1px solid #ddd;
    // border-left: 2px solid red;
    height: 100%;
    position: relative;
    &:hover {
        background: #f1f1f1;
        opacity: 0.9;
        box-shadow: 0 0.15rem 0.25rem rgba(0,0,0,.2);;
    }
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 25%;
        height: 50%;
        left: 0;
        border-left: 1px solid #bf6f6d;
    }
    &:last-child {
        margin-bottom: 6rem;
    }
`;
export const NewsWrapper = styled.div`
    margin: auto;
    align-items: center;
    flex-direction: column;
    width: 60%;
`;
export const TagsContainer = styled.div`
    padding: 1rem;
    width: 70%;
    margin: auto;
`;
export const TagUl = styled.ul`
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
`;
export const Tag = styled.li`
    float: none;
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #999;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    transition: color 0.2s;
    &:before {
        background: #fff;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: '';
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }
    &:after {
        background: #fff;
        border-bottom: 13px solid transparent;
        border-left: 10px solid #eee;
        border-top: 13px solid transparent;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
    }
    &:hover {
        background-color: crimson;
        color: white;
        cursor: pointer;
    }
    &:hover::after {
        border-left-color: crimson;
    }
`;