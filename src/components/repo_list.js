import React, { Component } from 'react'
import RepoItem from './repo_item'

const RepoList = (props) => {
  if (!props.repos[0]) {
    return <div>Loading...</div>
  }
  props.repos.sort((a, b) => {
    return (b.forks - a.forks)
  })

  const repos = props.repos.map(repo => {
    return <RepoItem key={repo.id} repo={repo} />
  })

  return (
    <div>
      <ul className="list-group">
        {repos}
      </ul>
    </div>
  )
}

export default RepoList
