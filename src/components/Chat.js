import React from 'react'
import './chat.css'
import { MDBBtn, MDBIcon } from 'mdbreact'
import TextViewer from './TextViewer'

class Chat extends React.Component {
  
  render() {
    return(
      <div className="chat-component">
        <div className="chat-text">
         <TextViewer />
        </div>
        <div className="chat-input">
          <input className="text-input" type="text"></input>
          <MDBBtn className="button-input"><MDBIcon icon="location-arrow" /></MDBBtn> 
          {/* <MDBBtn floating size="lg" gradient="purple"><MDBIcon icon="bolt" /></MDBBtn> */}
          {/* <MDBIcon fab icon="arrow" /> */}
        </div>
      </div>
    )
  }
}

export default Chat
