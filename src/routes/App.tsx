import { ApolloProvider } from '@apollo/client'
import React from 'react'
import client from '../apollo'
import Home from './home'
import Background from '../components/Background'


export default function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Background />
        <Home />
      </ApolloProvider>
    </React.StrictMode>
  )
}
