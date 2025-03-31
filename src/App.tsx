// Importações
import type React from 'react'
import { useState } from 'react'
import ContactForm from './components/contact/formContact'
import ContactList from './components/contactList/contactList'
import { GlobalStyles } from './styles/globalstyles'
import type { Contact } from './types/contact'

const App: React.FC = () => {
  const [currentContact, setCurrentContact] = useState<Contact | null>(null)

  //Renderiza :)
  return (
    <>
      <GlobalStyles />
      <h1>Lista de Contatos</h1>
      <ContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
      <ContactList setCurrentContact={setCurrentContact} />
    </>
  )
}

export default App
