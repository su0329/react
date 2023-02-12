import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () =>{
    const keyword = this.keywordElement.value
    this.props.updateState({isFirst:false, loading:true})
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response => {
        this.props.updateState({loading:false, users:response.data.items})
      },
      error => {this.props.updateState({loading:false, err:error.message})}

    )

  }

  render() {
    return (
       <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keywordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
