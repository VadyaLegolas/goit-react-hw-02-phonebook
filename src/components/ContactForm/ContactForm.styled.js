import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  border: 2px solid black;
  padding: 20px 10px;
`;

export const Label = styled.label``;
export const Input = styled.input`
  display: block;
  border-radius: 5px;
  margin-top: 5px;
  &:hover,
  &:focus {
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.7);
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
    background-color: blue;
    color: yellow;
  }
  border-radius: 10px;
`;
