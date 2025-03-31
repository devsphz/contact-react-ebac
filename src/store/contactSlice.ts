import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Contact } from '../types/contact'

type ContactsState = Contact[]

const loadFromLocalStorage = (): ContactsState => {
  const data = localStorage.getItem('contacts')
  return data ? JSON.parse(data) : []
}

const saveToLocalStorage = (contacts: ContactsState) => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}

const initialState: ContactsState = loadFromLocalStorage()

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload)
      saveToLocalStorage(state)
    },
    removeContact: (state, action: PayloadAction<string>) => {
      const updatedState = state.filter(
        contact => contact.id !== action.payload
      )
      saveToLocalStorage(updatedState)
      return updatedState
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.findIndex(contact => contact.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
        saveToLocalStorage(state)
      }
    }
  }
})

export const { addContact, removeContact, editContact } = contactsSlice.actions
export default contactsSlice.reducer
