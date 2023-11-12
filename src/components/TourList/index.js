import React, { Component } from 'react'
import Tour from '../Tour/Tour' // Tour file is directed to Tour.js file via package.json

export default class TourList extends Component {
  render() {
    return (
      <div>
        <h1>Hello from TourList</h1>
        <Tour></Tour>
      </div>
    )
  }
}
