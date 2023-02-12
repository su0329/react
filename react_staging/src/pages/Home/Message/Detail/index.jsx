import React, { Component } from 'react'

const data= [
    {id:'01',title:'111',content:'content for msg 1'},
    {id:'02',title:'222',content:'content for msg 2'},
    {id:'03',title:'333',content:'content for msg 3'},
]

export default class Detail extends Component {

  render() {
    const {id,title} = this.props.match.params
    const findResult = data.find((msg)=>{
        return msg.id == id && msg.title == title
    })
    return (
      <ul>
        <li>id: {findResult.id}</li>
        <li>title: {findResult.title}</li>
        <li>content: {findResult.content}</li>        
      </ul>
    )
  }
}
