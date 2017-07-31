import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';


class App extends React.Component {

  handleClick = (buttonName) => {
    console.log('click', buttonName);
  }

  render() {
    return (
      <div>
        Welcome to my test2 App
        <Display />
        <Display 
          value="117"
        />
        <ButtonPanel
          clickHandler = {this.handleClick}
        />
      </div>
    );
  }
}

export default App;