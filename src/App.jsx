import { useState } from 'react'
import Student from './Student'
import './App.css'

function App() {

  return (
    <>
<Student name="salman" age={30 } isStudent={false}/>
<Student name="Ali" age={33 } isStudent={true}/>
    </>
  )
}

export default App
