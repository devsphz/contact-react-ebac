import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  /* Tablet */
  @media (max-width: 768px) {
    padding: 30px;
    max-width: 90%;
    gap: 20px;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 15px;
    gap: 12px;
  }
`

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  /* Mobile */
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 15px;
  }
`

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.2s;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #0056b3;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 14px;
    font-size: 15px;
  }
`

export const InputLabel = styled.h5`
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #555;

  /* Mobile */
  @media (max-width: 480px) {
    font-size: 15px;
  }
`