import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/nav/navbar'
import Articles from './components/articles/articles'
import Home from './components/home/home'
import Merch from './components/merch/merch'
import Roster from './components/roster/roster'

// async function getPosts() {
//   const resp = await axios.get('/posts');
//   console.log(resp.data);
// }
//
// getPosts();

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
      articles: {
        articles: []

      }
    }
        this.getPosts = this.getPosts.bind(this);
  }
  async getPosts() {
      const resp = await axios.get('/posts');
      this.setState({articles: resp.data});

    }
    componentDidMount(){
      this.getPosts();
    }

    getView() {
   const view = this.state.curView
   switch (view) {

     case 'Roster':
       return <Roster holddata={this.state.articles.body}/>

     case 'Merch':
       return <Merch holdrandata={this.state.ranQuote} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleSubmitTwo={this.handleSubmitTwo} handleViewChange={this.setView} isCorrect={this.state.isCorrect} isSubmitted={this.state.isSubmitted}/>

     default:
       return <Home handleViewChange={this.setView}/>

   }
 }
  render() {
    return (
      <div className="App">

        <Navbar />

        <Articles />
        {console.log(this.state.articles)}
      </div>
    );
  }
}

export default App;
