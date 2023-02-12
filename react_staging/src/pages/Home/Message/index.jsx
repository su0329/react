import React, { Component } from 'react'
import Detail from './Detail'
import {Link,Route} from 'react-router-dom'

export default class Message extends Component {

  state = {
    messageList:[
      {id:'01',title:'111'},
      {id:'02',title:'222'},
      {id:'03',title:'333'},
    ]
  }

  render() {

    const {messageList} = this.state
    return (
    <div>   
        <ul>
            {
               messageList.map((msg) => {
                return (
                  <li key={msg.id}>     
                    {/* pass parameters to a nav component */}
                     <Link to={`/home/msg/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;
                  </li>
                )
               })
            }
        </ul>
        <hr></hr>
         {/* pass parameters to a nav component */}
        <Route path='/home/msg/detail/:id/:title' component={Detail}/> 
    </div>
    )
  }
}