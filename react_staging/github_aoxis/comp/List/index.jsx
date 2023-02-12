import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users,isFirst,loading,err} = this.props
    return (
      <div className="row">
        { isFirst ? <h2>Welcome, you can search github users by names</h2> : 
           loading ? <h2>Please, wait. In loading....</h2> :
            err ?  <h2 style={{color:'red'}}> {err}</h2>:
          users.map((user)=>{
            return (
            <div className="card" key={user.id}>
             <a href={user.html_url} rel="noreferrer" target="_blank">
               <img alt='avator' src={user.avatar_url} style={{width: '100px'}}/>
             </a>
             <p className="card-text">{user.login}</p>
          </div>)
          })
        }
      </div>
    )
  }
}
