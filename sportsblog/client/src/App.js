import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/nav/navbar";
import LoginView from "./components/login/loginview";
import Articles from "./components/articles/articles";
import { Icon } from "antd";

import { login } from "./services/auth";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: {
        email: "",
        password: ""
      },
      login: {
        email: "",
        password: ""
      },
      register: {
        email: "",
        password: "",
        password_confirmation: ""
      },
      post: {
        articles: "",
        comments: ""
      },
      curView: ""
    };
    this.getPosts = this.getPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterChange = this.handleRegisterChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.setView = this.setView.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  async getPosts() {
    const resp = await axios.get("/posts");
    this.setState({
      post: {
        articles: resp.data
      },
      curView: []
    });
  }
  async getUsers() {
    const resp = await axios.get("/users");
    console.log(resp.data)

}
  async newUser() {
    const newuser = await axios.post("/users");
    console.log(newuser)
    this.setState({
      users: {
        email: newuser.data,
        password: newuser.data
      }
  })
}

  componentDidMount() {
    this.getPosts();
    this.getUsers();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [name]: value
      }
    }));
  }

  handleRegisterChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      register: {
        ...prevState.register,
        [name]: value
      }
    }));
  }

  async handleLogin(e) {
    e.preventDefault();
    const tokenData = await login(this.state.login);
    console.log(tokenData);
    localStorage.setItem("token", tokenData.jwt);
  }

  async setView(view) {
    this.setState({ curView: view });
  }

  render() {
    const view = this.state.curView;
    let butt;

    switch (view) {
      case "Login":
        butt = (
          <LoginView

            handleViewChange={this.setView}
            handleChange={this.handleChange}
            handleRegisterChange={this.handleRegisterChange}
            handleLogin={this.handleLogin}
            login={this.state.login}
            register={this.state.register}
          />
        );
        break;
      default:
        butt = (
          <Articles
            holddata={this.state.post.articles}
            handleViewChange={this.setView}
          />
      );
    }

    return (
      <div className="App">
        <NavBar handleViewChange={this.setView} />

        {butt}
      </div>
    );
  }
}

export default App;
