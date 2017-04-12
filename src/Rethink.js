import React, {Component} from 'react'

export default class Rethink extends Component {
  componentWillMount() {
    console.log('COMPONENT MOUNTING IN RETHINK')
  }
  componentDidMount() {
    console.log('COMPONENT MOUNTED IN RETHINK')
  }
  render() {
    console.log('rendering in Rethink')
    if (this.run) {
      const components = this.run()
      if (!Array.isArray(components)) return null
      
      return <div>{components.map(({component, props}, index) => {
        const element = React.createElement(component, {key: index, ...props})
        return element
      })}</div>
    } else return null
  }
}
