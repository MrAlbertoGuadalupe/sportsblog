import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/nav/navbar";
import CreateArticle from "./components/articles/createarticle";
import LoginView from "./components/login/loginview";
import Articles from "./components/articles/articles";
import jwt_decode from "jwt-decode";
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
      editarticle: {
        title: "",
        body: "",
      },
      curView: "",
      editID: 0
    };
    this.getPosts = this.getPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterChange = this.handleRegisterChange.bind(this);
    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.setView = this.setView.bind(this);
    this.newUser = this.newUser.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.toggleState = this.toggleState.bind(this);
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
        Authorization: `Bearer ${token}`
      }
    });
  }

 toggleState(id) {
  this.setState({
    editID: id
  })
  console.log('toggle clicked ', id)
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
    const request = axios.post(
      `/users/${decoded.sub}/posts`,
      { post: this.state.newarticle },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const newarticle = this.getPosts;
    this.setState(prevState => ({
      newarticle: {
        ...prevState.newarticle,
        newarticle
      }
    }));
  }
  async editPost(id) {
    console.log('ran edit post')
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const request = axios.put(
      `/users/${decoded.sub}/posts/${id}`,
      { post: this.state.editarticle },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const articles = this.getPosts;
    this.setState(prevState => ({
      articles: {
        ...prevState.article,
        articles
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

  handleCreateChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newarticle: {
        ...prevState.newarticle,
        [name]: value
      }
    }));
  }

  changeId(e){

    this.setState({
      editarticle: {
        currentTitleEditId: e
      }
    });
    console.log('change id called')
  }


  handleEditChange(e, id) {
      const { name, value } = e.target;
      this.setState(prevState => ({
        editarticle: {
          ...prevState.editarticle,
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
            editPost={this.editPost}
            handleEditChange={this.handleEditChange}
            handleCreateChange={this.handleCreateChange}
            createtitle={this.state.newarticle.title}
            createbody={this.state.newarticle.body}
            editTitle={this.state.editarticle.title}
            editBody={this.state.editarticle.body}
            createPost={this.createPost}
            currentEditId={this.state.editarticle.currentTitleEditId}
            toggleState={this.toggleState}
            editID={this.state.editID}
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

//   handleEditChange(e) {
//
//     this.changeId(e.currentTarget.id);
//
//     const { name, value } = e.target;
//     const id = e.currentTarget.id;
//     console.log('id is ', id)
//     console.log('state id is', this.state.editarticle.currentTitleEditId)
//
//
//     if (id == this.state.editarticle.currentTitleEditId)
//     {
//     this.setState(prevState => ({
//       editarticle: {
//         ...prevState.editarticle,
//         [name]: value,
//         currentTitleEditId: e
//       }
//     }));
//   }
//   this.changeId(0);
// }
