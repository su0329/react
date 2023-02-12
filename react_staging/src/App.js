import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './comp/Header'




export default class App extends React.Component{



    render(){       
        return (
            <div>
                
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>   
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <Header/>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">       
             <Route path='/about' component={About}/>
             <Route path='/home' component={Home}/> 
             <Redirect to='/about' />
             {/* 当没有route匹配的时候 使用redirect去跳转路径 */}
          </div>
        </div>
      </div>
    </div>
    </div>
        )
      }
}