import styled from '@emotion/styled'
import {Link as Links} from 'react-router-dom'

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5px;
    padding-left: 1rem;
    flex: 1 0 auto;
    width: 100%;
    min-height: 3rem;
    text-decoration: none;
    color: #333;
    :nth-of-type(odd){
        background: #DADADA;
      }
      :nth-of-type(even){
        background: #ededed;
      }
      &:hover {
        background: #FFF;
        cursor: pointer;
      }
`;
export const TableWrapper = styled.div`
    width: 100%;
    border-radius: 2px;
    margin-bottom: 3rem;
`;
export const Ul = styled.ul`
      padding: 0;
    list-style-type: none;
    min-height: 2rem;
    border-radius: 2px;
    width: 100%;
  `;
export const TableText = styled.h2`
  color: #222;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;
