import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'
import * as serviceWorker from './serviceWorker'
import { AuthProvider } from 'oidc-react'

// Styles
import './index.scss'

// ==========================================================
const App: FC = () => {
  const oidcConfig = {
    onSignIn: async (user: any) => {
      console.log('here')
      alert('You just signed in, congratz! Check out the console!')
      console.log(user)
      window.location.hash = ''
    },
    authority: 'https://idp.cloud.vwgroup.com/auth/realms/kums-mfa',
    clientId: 'idp-947b4569-2119-4899-9b58-aac5009f3de4',
    responseType: 'code',
    redirectUri: 'http://localhost:3000'
  }

  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <header className="App-header">
          <p>OIDC React</p>
        </header>
      </div>
    </AuthProvider>
  )
}

// ==========================================================
const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
