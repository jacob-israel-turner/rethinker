import Rethink from './Rethink'

class RunEvery extends Rethink {

  componentWillMount() {
    console.log('COMPONENT MOUNTING IN RUNEVERY')
  }

  componentDidMount() {
    console.log('COMPONENT MOUNTED IN RUNEVERY')
    this.interval = setInterval(() => this.props.cb(this.props.step), this.props.interval)
  }

  componentWillUmount() {
    clearInterval(this.interval)
  }
  run() {
    console.log('Running in runevery')
  }
}

class Example extends Rethink {
  state = {
    count: 0
  }

  componentWillMount() {
    console.log('COMPONENT MOUNTING IN EXAMPLE')
  }

  componentDidMount() {
    console.log('COMPONENT MOUNTED IN EXAMPLE')
  }

  increment(i) {
    this.setState({ count: this.state.count + i })
  }
  
  run() {
    console.log('Running in example')
    console.log(this.state.count)
    return [{component: RunEvery, props: {cb: this.increment.bind(this), interval: 1000, step: 1}}]
  }
}


export default Example;
