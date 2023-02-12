import React, { Component } from 'react'
import MyNaviLink from '../../comp/MyNaviLink'
import {Route, Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home Content</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
             <MyNaviLink to="/home/news">News</MyNaviLink>
          </li>
          <li>
             <MyNaviLink to="/home/msg">Message</MyNaviLink>  
          </li>        
        </ul>
             <Route path='/home/news' component={News}/>
             <Route path='/home/msg' component={Message}/> 
             <Redirect to='/home/news' />
    </div>
    </div>
    )
  }
}