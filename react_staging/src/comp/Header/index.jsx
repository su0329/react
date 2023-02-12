import React, { Component } from 'react'
import MyNaviLink from '../MyNaviLink'


export default class Header extends Component {
  render() {
    return (
       <div className="list-group">
        <MyNaviLink to="/about">About</MyNaviLink>
        <MyNaviLink to="/home">Home</MyNaviLink>   
      </div>
    )
  }
}
