import React, { Component } from 'react';
import LoginView from '../login/loginview.js';

export default class Navbar extends Component {
  constructor(props) {
     super(props);
     this.state = {

     }

  }

  handleChange(selectedProfile) {
    this.setState({
      selectedProfile
    });
  }

  render() {
     return (

      <div>

             <button onClick={() => this.setView('aboutView')} className="navButton">About</button>
             <button onClick={() => this.setView('rosterView')} className="navButton">Roster</button>
             <button onClick={() => this.setView('statsView')} className="navButton">Stats</button>
             {this.state.user ?
            <button onClick={() => this.setView('profileView')} className="navButton">You are logged in</button> :
            <button onClick={() => this.setView('loginView')} className="navButton">You are not logged in</button>
           }
         {this.state.user ? <button onClick={this.logout} className="navButton">Log off</button>
         : null}
         <LoginView />
      </div>
     )
   }
}
