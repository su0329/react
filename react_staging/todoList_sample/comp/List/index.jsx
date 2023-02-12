import React from 'react'
import Item from '../Item'
import './index.css'

export default class List extends React.Component{
  render(){
    const {items, updateStatus, deleteTask} = this.props
    return (
      <ul className="todo-main">
       {
         items.map(item =>{
          return <Item key={item.id} {...item} updateStatus={updateStatus} deleteTask={deleteTask}/>
         })
       }
      </ul>
    )
  }
}