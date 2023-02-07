import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import {store,persistor} from './app/store'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
