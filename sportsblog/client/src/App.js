import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/nav/navbar'
import LoginView from './components/login/loginview'
import Articles from './components/articles/articles'
import { Icon
} from 'antd';
import Home from './components/home/home'
import Merch from './components/merch/merch'
import Roster from './components/roster/roster'
import { login } from './services/auth';

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
        articles: '',
        comments: ''
      },
      curView: '',
    }
        this.getPosts = this.getPosts.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRegisterChange=this.handleRegisterChange.bind(this);
         this.handleLogin = this.handleLogin.bind(this);
         this.setView = this.setView.bind(this);
  }

  async getPosts() {
      const resp = await axios.get('/posts');
      this.setState({
        post: {
        articles: resp.data
      },
      curView: []
    });
    }

   componentDidMount(){
      this.getPosts();
    }

      handleChange(e){
        const {name, value} = e.target
        this.setState(prevState => (
          {
            login: {
              ...prevState.login,
              [name] : value
            }
          }
        ))
      }

      handleRegisterChange(e){
        const {name, value} = e.target
        this.setState(prevState => (
          {
            register: {
              ...prevState.register,
              [name] : value
            }
          }
        ))
      }

      async handleLogin(e){
        e.preventDefault();
        const tokenData = await login(this.state.login);
        console.log(tokenData);
        localStorage.setItem('token', tokenData.jwt)
      }

  async setView(view) {
    this.setState({curView: view});
  }


  render() {
    const view = this.state.curView
  let butt;

    switch (view) {

      case 'Login':
        butt = <LoginView handleViewChange={this.setView}/>
        break;
      default:
      butt =   <Articles
           holddata = {this.state.post.articles} />
// this.state.post.articles.length === 0 ? null:
      // default:
      // butt = <Articles handleViewChange={this.setView}
      //   holddata = {this.state.post.articles}/>
    }

    return (
      <div className="App">


       <Icon type="user"
       style={{ fontSize: '30px', color: 'white' }}

       onClick={() => this.setView('Login')} />



      {butt}

  </div>
)

}
}

export default App;
// <button onClick={() => this.setView('aboutView')} className="navButton">About</button>
// <button onClick={() => this.setView('rosterView')} className="navButton">Roster</button>
// <button onClick={() => this.setView('statsView')} className="navButton">Stats</button>
// {this.state.user ?
// <button onClick={() => this.setView('profileView')} className="navButton">You are logged in</button> :
// <button onClick={() => this.setView('Login')} className="navButton">You are not logged in</button>
//
// }
// {this.state.user ? <button onClick={this.logout} className="navButton">Log off</button>
// : null}

// }
// {this.state.post.articles.length === 0 && this.state.curView.length === 0 ? null: <Articles
//       holddata = {this.state.post.articles}
//       handleViewChange={this.setView}
//      />
//
//  }
