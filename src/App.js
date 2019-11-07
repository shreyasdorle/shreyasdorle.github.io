import React, { Component } from 'react';
import Header from './Components/Header';
import Chatbox from './Components/Chatbox';
import MessageList from './Components/MessageList';
import Chat from 'react-fancy-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Chat/>
        <Chatbox/>
        <MessageList/>
      </div>
    );
  }
}

export default App;