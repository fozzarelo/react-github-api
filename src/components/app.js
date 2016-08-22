import React, { Component } from 'react'
import SearchBar from './search_bar'
import RepoList from './repo_list'

const FOZZREPOS = new Request('https://api.github.com/users/fozzarelo/repos')

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {repos: [], originalList: []}
    fetch(FOZZREPOS).then(response => {
      return response.json().then(json => {
        this.setState({repos: json, originalList: json})
        return json
      })
    })
  }

  search (name) {
    let fillteredList = []
    this.state.originalList.forEach(repo => {
      if (repo.name.toLowerCase().includes(name.toLowerCase())) {
        fillteredList.push(repo)
      }
    })
    this.setState({repos: fillteredList})
  }

  render () {
    return (
      <div>
        <h2>Fozzarelo GitHub Repositories</h2>
          <br />
          <SearchBar onSearch={name => this.search(name)}/>
          <br />
          <RepoList repos={this.state.repos}/>
      </div>
    )
  }
}
