import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'Styles/index.less'
import { Provider } from 'react-redux'
import { store } from 'Data/Objects/Store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
