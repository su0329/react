import React from 'react'
import './index.css'


export default class Footer extends React.Component{
  render(){

    const items = this.props.items
    const totalLength = items.length
    const doneLength = items.reduce((pre,cur)=>{
         return (cur.done ? pre+1 : pre)
    },0)

    return (
      <div className="todo-footer">
      <label>
        <input type="checkbox"/>
      </label>
      <span>
        <span>已完成{doneLength}</span> / 全部{totalLength}
      </span>
      <button className="btn btn-danger">清除已完成任务</button>
    </div>
    )
  }
}