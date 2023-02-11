import './App.css';
import Greet from './components/Greet';
import FirstParagraph from './components/FirstParagraph';
import ClassComponent from './components/classComponent';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet></Greet>
        <FirstParagraph></FirstParagraph>
        <ClassComponent></ClassComponent>
      </div>
    )
  }
}

export default App;
