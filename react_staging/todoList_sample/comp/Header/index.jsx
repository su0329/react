import {nanoid} from 'nanoid'

import React from 'react'
import './index.css'

export default class Header extends React.Component{

  add = (event)=>{
     if(event.keyCode !== 13) return;
     const object = {id:nanoid(), name:event.target.value, done:false}
     this.props.receiveTask(object)
     event.target.value = ''
  }

  render(){
    return (
      <div className="todo-header">
      <input type="text" onKeyUp={this.add} placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
    )
  }
}