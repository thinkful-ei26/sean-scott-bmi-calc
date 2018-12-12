import React, { Component } from 'react';
import Input from './components/input';
import Output from './components/output';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      height: 48,
      weight: 50,
    };
  }

  setHeight(event) {
    this.setState({
      height: event.target.value,
      // weight: this.state.weight
    })
  }
  setWeight(event) {
    this.setState({
      // height: this.state.height,
      weight: event.target.value
    })
  }
  resetClicked(event) {
    this.setState({
      height: 48,
      weight: 50
    })
  }

  render() {
    return (
      <div className="App">
        <Input label="Height (in)" max="84" min="48" onChange={(event) => this.setHeight(event)} value={this.state.height}/>
        <Input label="Weight (lbs)" max="700" min="50" onChange={(event) => this.setWeight(event)} value={this.state.weight}/>
        <Output bmi={(this.state.weight * 703 / (this.state.height ** 2)).toFixed(1)}/>
        <button onClick={() => this.resetClicked()}>Reset</button>
      </div>
    );
  }
}
