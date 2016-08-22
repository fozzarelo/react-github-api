import React, { Component } from 'react'

const RepoItem = (props) => {
  const modifiedName = name => {
    let nameWords = name.split('-')
    let modifiedWords = nameWords.map(word => {
      if (word !== 'as' && word !== 'on') {
        word = word.split('')[0].toUpperCase() + word.slice(1, word.length)
      }
      return word
    })
    return modifiedWords.join(' ')
  }

  return (
    <li className="list-group-item">
      Name: {modifiedName(props.repo.name)}
      <br />
      Fork count: {props.repo.forks}
      <br />
      Language: {props.repo.language}
      <br />
      Created date: {props.repo.created_at}
      <br />
    </li>
  )
}

export default RepoItem
