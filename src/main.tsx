import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'

const rootElement = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(rootElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
