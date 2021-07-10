import React, { useState } from 'react'
import "./App.css"
import Header from "./Header"
import Nav from "./Nav"
import requests from './requests'
import Results from './Results'
function App() {
const [select,setSelect]=useState(requests.fetchActionMovies)
  return (
    <div className="app">
      <Header/>
      <Nav setSelect={setSelect} />
      <Results select={select}/>
    </div>
  )
}

export default App
