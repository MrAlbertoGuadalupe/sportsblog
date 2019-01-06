import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

async function getPosts() {
  const resp = await axios.get('/posts');
  console.log(resp.data);
}

getPosts();
class App extends Component {
  constructor(){
    super();
    this.state = {
      login : {
        email: '',
        password: ''
      },
      register: {
        email: '',
        password: '',
        password_confirmation: ''

      }
    }
  }
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
