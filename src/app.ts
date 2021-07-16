import { Component } from 'react'
import './app.scss'

import './middleware'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return this.props.children
  }
}


export default App
