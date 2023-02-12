import React from 'react'
import Footer from './comp/Footer'
import Header from './comp/Header'
import List from './comp/List'
import './app.css'


export default class App extends React.Component{

 state = {
     items:[{id:'001', name:'吃饭', done:false},
            {id:'002', name:'睡觉', done:true}
    ]
 }

 // receive the object from header comp
 receiveTask = (task) =>{
   const items = this.state.items
   const newList = [task,...items]
   this.setState({items:newList}) 
 }

 updateStatus = (id, status) =>{
  const items = this.state.items
  const newItems = items.map(item => {
    if(item.id === id) return {...item, done:status}
    else return item
  })
  this.setState({items:newItems}) 
 }

 deleteTask = (id) => {
  const items = this.state.items
  const newItems = items.filter(item => {
    return item.id !== id
  })
  this.setState({items:newItems}) 
 }

  render(){
    const {items} = this.state
    return (
        <div className="todo-container">
          <div className="todo-wrap">
           <Header receiveTask={this.receiveTask}/>
           <List items={items} updateStatus={this.updateStatus} deleteTask={this.deleteTask}/>
           <Footer items={items}/>
          </div>
        </div>
    )
  }
}
