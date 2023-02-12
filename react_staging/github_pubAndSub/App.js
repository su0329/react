import React from 'react'
import './App.css'
import Search from './comp/Search'
import List from './comp/List'

export default class App extends React.Component{

    render(){       
        return (
            <div className="container">
                 <Search/>
                 <List {...this.state}/>
            </div>
        )
      }
}