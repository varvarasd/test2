import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';


class App extends React.Component {
  render() {
    return (
      <div>
        Welcome to my test2 App
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;