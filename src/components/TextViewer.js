import React from 'react'
import './TextViewer.css'

class TextViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          datetime: '20:00',
          isUserMessage: false,
          text: 'Hola, esto es un texto de prueba',
          username: 'Peter'
        },
        {
          datetime: '19:56',
          isUserMessage: true,
          text: 'Hola esto es el envío de un mensaje de prueba'
        },
        {
          datetime: '20:04',
          isUserMessage: true,
          text: 'Este es un segundo mensaje'
        },
        {
          datetime: '20:00',
          isUserMessage: false,
          text: 'Hola, esto es un texto de prueba',
          username: 'Peter'
        },
        {
          datetime: '19:56',
          isUserMessage: true,
          text: 'Hola esto es el envío de un mensaje de prueba'
        },
        {
          datetime: '20:04',
          isUserMessage: true,
          text: 'Este es un segundo mensaje'
        },
        {
          datetime: '20:00',
          isUserMessage: false,
          text: 'Hola, esto es un texto de prueba',
          username: 'Peter'
        },
        {
          datetime: '19:56',
          isUserMessage: true,
          text: 'Hola esto es el envío de un mensaje de prueba'
        },
        {
          datetime: '20:04',
          isUserMessage: true,
          text: 'Este es un segundo mensaje'
        },
        {
          datetime: '20:00',
          isUserMessage: false,
          text: 'Hola, esto es un texto de prueba',
          username: 'Peter'
        },
        {
          datetime: '19:56',
          isUserMessage: true,
          text: 'Hola esto es el envío de un mensaje de prueba'
        },
        {
          datetime: '20:04',
          isUserMessage: true,
          text: 'Este es un segundo mensaje'
        },
        {
          datetime: '20:00',
          isUserMessage: false,
          text: 'Hola, esto es un texto de prueba',
          username: 'Peter'
        },
        {
          datetime: '19:56',
          isUserMessage: true,
          text: 'Hola esto es el envío de un mensaje de prueba'
        },
        {
          datetime: '20:04',
          isUserMessage: true,
          text: 'Este es un segundo mensaje'
        },
      ]
    }
  }

  renderMessages() {
    return this.state.messages.map((m, index) => {
      if (m.isUserMessage) {
        // align to right, green color
        return (
          <div key={index} className="message-left">
            {m.text}
          </div>
        )
      } else {
        // align to left, white color
        return (
          <div key={index} className="message-right">
            {m.text}
          </div>
        )
      }
    })
  }

  render () {
    return (
      <div className="text-container">
        {this.renderMessages()}
      </div>
    )
  }
}

export default TextViewer