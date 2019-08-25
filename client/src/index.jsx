import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>react on proxy server </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('3000'))