// Importações
import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../store/contactSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  }
})

export type RootState = ReturnType<typeof store.getState> // Retorno da funcão, estado atual
export type AppDispatch = typeof store.dispatch // despacha
