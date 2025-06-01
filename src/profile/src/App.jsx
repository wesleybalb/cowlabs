import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import SetUserLoged from './components/SetUserLoged.jsx'
import UserContent from './components/UserContent.jsx'


function App() {
  
  return (
    <>
    
      <Header />

      <UserContent />


      <SetUserLoged />
    </>
  )
}

export default App
