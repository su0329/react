import React from 'react'
import './index.css'

export default class Item extends React.Component{

  state = {
     focused: false
  }

  highlight = (bool) =>{
    return ()=>{
      this.setState({focused:bool})  
    }   
  }

  changeStatus = (event) =>{
     this.props.updateStatus(this.props.id, event.target.checked)    
  }

  deleteTask = () =>{
    if(window.confirm('Confirm to delete?')){
      this.props.deleteTask(this.props.id)
      console.log(this.props.id)
    }      
 }

  render(){
    const {id, name, done} = this.props
    const {focused} = this.state

    return (
      <li style={{backgroundColor: focused? '#ddd' : 'white'}} onMouseEnter={this.highlight(true)} onMouseLeave={this.highlight(false)}>
      <label>
        <input type="checkbox" defaultChecked={done?true : false} onChange={this.changeStatus}/>
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" style={{display:focused? 'block':'none'}} onClick={this.deleteTask}>删除</button>
    </li>
    )
  }
}