import React from 'react'
import './App.css'
import FormAddNew from './components/FormAddNew'
import Header from './components/Header'
import TableUser from './components/TableUser'

function App() {
  return (
    <div className="app">
      <Header />
      <FormAddNew />
      <TableUser />
    </div>
  )
}

export default App
