import React from 'react'
import DkvUseState from './components/DkvUseState'
import DkvUseEffect from './components/DkvUseEffect'
import DkvUseContext from './components/DkvUseContext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 className='text-center'>Đỗ Khắc Việt - Hook</h1>
        <hr/>
        <DkvUseState />
        <hr/>
        <DkvUseEffect/>
        <hr/>
        <DkvUseContext/>
    </div>
  )
}
