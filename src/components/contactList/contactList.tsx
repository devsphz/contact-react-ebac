import type React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'
import { removeContact } from '../../store/contactSlice'
import type { Contact } from '../../types/contact'
import { List, ListItem, Button } from './styles'

interface ContactListProps { // Props
  setCurrentContact: React.Dispatch<React.SetStateAction<Contact | null>>
}

const ContactList: React.FC<ContactListProps> = ({ setCurrentContact }) => {
  const contacts = useSelector((state: RootState) => state.contacts) // Lista de contatos
  const dispatch = useDispatch() // Disparar a ação

  // Renderiza :)
  return (
    <List>
      {contacts.map(contact => ( // key identifica os itens
        <ListItem key={contact.id}>
          <div>
            <strong>{contact.name}</strong> <br />
            {contact.email} <br />
            {contact.phone}
          </div>
          <div>
            <Button onClick={() => setCurrentContact(contact)}>Editar</Button>
            <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default ContactList
