import React, { Component } from 'react';
import DatePicker from 'DatePicker'

class App extends Component {
  state = {
    date: new Date()
  }
  onSelect = day => {
    this.setState({ date: day })
  }
  render() {
    console.log(this.state.date)
    return (
      <DatePicker
        selected={this.state.date}
        onSelect={this.onSelect}
      />
    )
  }
}

export default App

