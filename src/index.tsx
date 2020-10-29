import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { ApolloClient, ApolloProvider } from '@apollo/client';
import 'todomvc-app-css/index.css'
import { cache } from './cache';


//const PORT = process.env.PORT || 400;

export const client = new ApolloClient({
  cache,
  uri: 'https://apollo-remote-state-server.herokuapp.com/',
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': 'ac3-todos-backend',
    'client-version': '1.0.0',
  },
  connectToDevTools: true,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
