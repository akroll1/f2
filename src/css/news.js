import styled from '@emotion/styled'

export const SearchWrapper = styled.div`
    width: 25%;
    margin: auto;
`;
export const NewsCard = styled.div`
    flex-wrap: nowrap;
	align-items: center;
	margin: 10px auto;
	padding: 1rem;
	border-radius: 5px;
	margin-bottom: 1rem;

    &:hover {
	background: #f1f1f1;
	opacity: 0.9;
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