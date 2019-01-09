import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/nav/navbar";
import CreateArticle from "./components/articles/createarticle";
import LoginView from "./components/login/loginview";
import Articles from "./components/articles/articles";
import jwt_decode from 'jwt-decode';
import { login } from "./services/auth";



class App extends Component {
  constructor() {
    super();
    this.state = {
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
      newarticle: {
        title: "",
        body: ""
      },
      curView: ""
    };
    this.getPosts = this.getPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterChange = this.handleRegisterChange.bind(this);
    this.handleArticleChange = this.handleArticleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.setView = this.setView.bind(this);
    this.newUser = this.newUser.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.createPost = this.createPost.bind(this);
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

  }
  async newUser() {
    const newuser = await axios.post("/users");
    console.log(newuser);
    this.setState({
      users: {
        email: newuser.data,
        password: newuser.data
      }
    });
  }
  async createComment() {
    const token = localStorage.getItem("token");
    console.log("clicked create comment");
    const request = axios.create("/posts", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  async deletePost(e) {
    const data = e.currentTarget.value;
    const token = localStorage.getItem("token");

    const request = axios.delete(`/posts/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  }

  async createPost(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const request = axios.post(`/users/${decoded.sub}/posts`, { post: this.state.newarticle}, {
      headers: {
        Authorization: `Bearer ${token}`
      }});
    const newarticle = this.getPosts;
    this.setState(prevState => ({
      newarticle: {
        ...prevState.newarticle,
        newarticle
      }
    }));
  }
  async updatePost(e) {
    e.preventDefault();
    const data = e.currentTarget.value;
    const token = localStorage.getItem("token");
    const request = axios.put(`/posts/${data}`, { post: this.state.newarticle}, {
      headers: {
        Authorization: `Bearer ${token}`
      }});
    const newarticle = this.getPosts;
    this.setState(prevState => ({
      newarticle: {
        ...prevState.newarticle,
        newarticle
      }
    }));
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
  handleArticleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newarticle: {
        ...prevState.newarticle,
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
            deletePost={this.deletePost}
            updatepost={this.updatePost}
            handlearticlechange={this.handleArticleChange}
            valuetitle={this.state.newarticle.title}
            valuebody={this.state.newarticle.body}
            createPost={this.createPost}
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
