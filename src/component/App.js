import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div>
        Welcome to my test2 App
        <Display />
        <Display 
          value={this.state.next || this.state.total || '0'}
        />
        <ButtonPanel
          clickHandler = {this.handleClick}
        />
      </div>
    );
  }
}

export default App;