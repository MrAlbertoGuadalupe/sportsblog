import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/nav/navbar'
import Articles from './components/articles/articles'
import Home from './components/home/home'
import Merch from './components/merch/merch'
import Roster from './components/roster/roster'

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
      },
      post: {
        articles: ''
      }
    }
        this.getPosts = this.getPosts.bind(this);
  }

  async getPosts() {
      const resp = await axios.get('/posts');
      this.setState({post: {
        articles: resp.data}});
    }

   componentDidMount(){
      this.getPosts();
    }
  render() {
    return (
      <div className="App">
<Navbar />
        {this.state.post.articles.length === 0 ? null: <Articles
            holddata = {this.state.post.articles}

           />
}

      </div>
    );
  }
}

export default App;
