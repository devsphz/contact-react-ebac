import type React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../../store/contactSlice'
import { Button, Form, Input } from './styles'
import type { Contact } from '../../types/contact'

interface FormContactProps {
  currentContact: Contact | null
  setCurrentContact: React.Dispatch<React.SetStateAction<Contact | null>>
}

const FormContact: React.FC<FormContactProps> = ({ currentContact, setCurrentContact }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name)
      setEmail(currentContact.email)
      setPhone(currentContact.phone)
    }
  }, [currentContact])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (currentContact) {
      dispatch(
        editContact({
          ...currentContact,
          name,
          email,
          phone
        })
      )
    } else {
      const newContact = {
        id: new Date().toISOString(),
        name,
        email,
        phone
      }
      dispatch(addContact(newContact))
    }

    setCurrentContact(null)
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h5>Nome:</h5>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome completo"
        required
      />
      <h5>Email:</h5>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
        required
      />
      <h5>Telefone:</h5>
      <Input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Digite seu Telefone"
        required
      />
      <Button type="submit">
        {currentContact ? 'Editar Contato' : 'Adicionar Contato'}
      </Button>
    </Form>
  )
}

export default FormContact
