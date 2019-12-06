import React from 'react'
import { MDBBtn } from 'mdbreact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chat from './components/Chat'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chat />
      <h1>A</h1>
      <MDBBtn gradient="aqua">Botón 1</MDBBtn>
      <Footer />
    </div>
  );
}

export default App
