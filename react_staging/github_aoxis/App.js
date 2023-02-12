import React from 'react'
import './App.css'
import Search from './comp/Search'
import List from './comp/List'

export default class App extends React.Component{

    state ={
        users:[],
        isFirst: true,
        loading: false,
        err: '',
    }

    updateState = (dataType) =>{
       this.setState(dataType)
    }

    render(){       
        return (
            <div className="container">
                 <Search updateState={this.updateState} />
                 <List {...this.state}/>
            </div>
        )
      }
}