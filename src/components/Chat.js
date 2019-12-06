import React from 'react'
import './chat.css'
import { MDBBtn } from 'mdbreact'

class Chat extends React.Component {
  render() {
    return(
      <div className="chat-component">

        <div className="chat-input">
          <input className="text-input" type="text"></input>
          <MDBBtn>Boton</MDBBtn>
        </div>
      </div>
    )
  }
}

export default Chat
