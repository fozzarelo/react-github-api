import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {name: ''}
  }

  handleInputChange (name) {
    this.setState({name: name})
    this.props.onSearch(name)
  }

  handleButtonClick(){
    this.setState({name: ""})
    this.handleInputChange("")
  }

  render () {
    return (
      <div>
        <input className="form-control"
          value={this.state.name}
          onChange= {event => this.handleInputChange(event.target.value)}
          placeholder= "Search by name"
        />
        <button
          onClick= {x => this.handleButtonClick()}>
          Clear Field
        </button>
      </div>
    )
  }
}
