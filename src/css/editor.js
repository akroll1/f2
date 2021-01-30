import styled from '@emotion/styled';

export const FieldSet = styled.fieldset`
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
`;
export const TextArea = styled.textarea`
  margin-bottom: 2rem;
  padding: 10px;
  height: 70px;
  width: 100%;
  resize: none;
  &:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }
  placeholder {
    color: #888;
  }
  input:focus,
  textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }
`;
export const EditorInput = styled.input`
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 2px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  placeholder {
    color: #888;
  }
`;

export const Row = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  height: 2rem;
  width: 100%;
  resize: none;
  :nth-of-type(odd){
    background: #EAEAEA;
  }
  :nth-of-type(even){
    background: #DADADA;
  }
  placeholder {
    color: #888;
  }
  &:hover {
    background: #FFF;
    cursor: pointer;
  }
`;

export const TableText = styled.h2`
  color: #222;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

export const TableWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 1rem auto;
  padding: 1rem;
  margin-bottom: 3rem;
  background: #FFF;
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const Input = styled.input`
  width: 60%;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 1.2rem;
`;

export const Button = styled.button`
    font-size: 1rem;
    cursor: pointer;
    width: 35%;
    height: 2.5rem;
    color: #fff;
    border-radius: 3px;
    margin: 1rem auto;
    font-weight: 600;
    background: #d22509;
    color: #FFF;
    box-shadow: 0 0.05rem 0.15rem rgba(0,0,0,0.2);
    &:hover {
        background: #ff2805;
        -webkit-transition: background 0.2s ease-in-out;
        -moz-transition: background 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
        color: #FFF;
        box-shadow: 0 0.15rem 0.25rem rgba(0,0,0,0.2);
    }
`;
export const SaveDraftButton = styled.button`
    box-shadow: 0 0.05rem 0.15rem rgba(0,0,0,0.2);
    font-size: 1rem;
    cursor: pointer;
    width: 35%;
    height: 2.5rem;
    background: #9e9e9e;
    color: #fff;
    border-radius: 3px;
    margin: 1rem auto;
    font-weight: 600;
    &:hover {
        background: darkgray;
        -webkit-transition: background 0.2s ease-in-out;
        -moz-transition: background 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
        color: #FFF;
        box-shadow: 0 0.15rem 0.25rem rgba(0,0,0,0.2);
}
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;

export const Label = styled.label`
  // margin: 10px;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 1.5rem;  
  text-align: center;  
  margin: auto;
  width: 100%;  
  padding: 5px;
`;