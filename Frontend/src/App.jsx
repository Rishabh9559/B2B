import React from 'react'
import Home from './components/Home'
import { ItemListProvider } from './store/store'

const App = () => {
  return (
    <ItemListProvider>
      <Home />
    </ItemListProvider>
  )
}

export default App