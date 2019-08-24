import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>hello from 3000</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('3000'))