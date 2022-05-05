import React, { useState, useEffect } from 'react';

import './style.css'

import { Card } from "../../components/Card"
import { name } from 'ejs';

function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(prevState => [...prevState,newStudent]);
  }

useEffect(() => {
  console.log("useEffect foi disparado")
}, [])

  return (
  <div className="container">
    <header>
    <h1>Lista de presença</h1>

    <div>
      <strong>Romario</strong>
      <img src="https://www.lance.com.br/files/article_main/uploads/2019/02/28/5c785e25c73b4.jpeg" alt="Foto do perfil"/>
    </div>
    
    </header>
    
    <input 
    type="text" 
    placeholder="Digite o nome..." 
    onChange={e => setStudentName(e.target.value)}
    />
    
    <button type="button" onClick= {handleAddStudent} >
      Adicionar
    </button>

    <br />
{
  students.map(student => 
    <Card 
      key={student.time}
      name={student.name}
      time={student.time} 
    />)
}

  </div>  
  )
}

export default Home
