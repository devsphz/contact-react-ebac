import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #fff;
`

export const ContactInfo = styled.div`
  flex: 1;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 20px;
`

export const Button = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  min-width: 80px;
  &:hover {
    background: #a71d2a;
  }

  &:first-child {
    background: #007bff;
    &:hover {
      background: #0056b3;
    }
  }
`