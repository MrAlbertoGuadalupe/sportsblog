import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/nav/navbar";
import CreateArticle from "./components/articles/createarticle";
import CommentList from "./components/articles/commentlist";
import LoginView from "./components/login/loginview";
import LogoutView from "./components/login/logoutview";
import Articles from "./components/articles/articles";
import jwt_decode from "jwt-decode";
import { login } from "./services/auth";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        password: "",
        password_confirmation: ""
      },
      login: {
        email: "",
        password: ""
      },
      post: {
        articles: "",
        comments: ""
      },
      newarticle: {
        title: "",
        body: ""
      },
      newcomment: {
        title: "",
        body: ""
      },
      editarticle: {
        title: "",
        body: "",
        img_url: ""
      },
      editcomment: {
        title: "",
        body: ""
      },
      userisloggedin: false,
      curView: "",
      editID: 0
    };
    this.getPosts = this.getPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.setView = this.setView.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.userSubmitted = this.userSubmitted.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.typingRegister = this.typingRegister.bind(this);
    this.logout = this.logout.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  async getPosts() {
    const resp = await axios.get("/posts");
  }
  async getComments() {
    const resp = await axios.get("/posts/1/comments");
  }
  async getBoth() {
    const resptwo = await axios.get("/posts/1/comments");
    const resp = await axios.get("posts");
    this.setState({
      post: {
        articles: resp.data,
        comments: resptwo.data
      },
      curView: []
    });
  }

  async getUsers() {
    const resp = await axios.get("/users");
  }

  async createComment(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log("clicked create comment");
    const request = axios.create(
      `/posts/1/comments`,
      { post: this.state.comments },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const newcomment = this.getComments;
    this.setState(prevState => ({
      newcomment: {
        ...prevState.newcomment,
        newcomment
      }
    }));
  }

  toggleState(id) {
    this.setState({
      editID: id
    });
    console.log("toggle clicked ", id);
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

  async userSubmitted(userInfo) {
    await axios.post(`/users`, { user: userInfo });
  }

  registerUser(e) {
    e.preventDefault();
    this.userSubmitted(this.state.user);
  }

  typingRegister(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  async editPost(id) {
    console.log("ran edit post");
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
    this.getBoth();
    this.getUsers();

  }

  //login handleChange
  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [name]: value
      }
    }));
  }
  async handleLogin(e) {
    e.preventDefault();
    const tokenData = await login(this.state.login);
    console.log(tokenData);
    localStorage.setItem("token", tokenData.jwt);
    this.setState({
      userisloggedin: true
    });
  }

  async logout() {
    console.log("logged out");
    localStorage.removeItem("token");
    this.setView("Logout");
    this.setState({
      userisloggedin: false
    });
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
  handleCommentChange(e, id) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newcomment: {
        ...prevState.newcomment,
        [name]: value
      }
    }));
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
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
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
            handleLogin={this.handleLogin}
            login={this.state.login}
            userSubmitted={this.userSubmitted}
            registerUser={this.registerUser}
            typingRegister={this.typingRegister}
          />
        );
        break;
      case "Logout":
        butt = (
          <LogoutView handleViewChange={this.setView} logout={this.logout} />
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
            newcommenttitle={this.state.newcomment.title}
            newcommentbody={this.state.newcomment.body}
            editimgurl={this.state.editarticle.img_url}
            createPost={this.createPost}
            currentEditId={this.state.editarticle.currentTitleEditId}
            toggleState={this.toggleState}
            editID={this.state.editID}
            holdcommentdata ={this.state.post.comments}
            createComment = {this.createComment}
          />
        );
    }

    return (
      <div className="App">
        <NavBar handleViewChange={this.setView} logout={this.logout} userisloggedin={this.state.userisloggedin}/>


        {butt}
      </div>
    );
  }
}

export default App;
// async registerUser(e) {
//   e.preventDefault();
//   const data = await axios.post('/users')
//   console.log(data)
//   const users = this.getUsers;
//   this.setState(prevState => ({
//     login: {
//       ...prevState.user,
//       users
//     }
//   }));
// }
//console.log('clicked register');
//     const user= this.getUsers;
//     this.setState(prevState => ({
//       user: {
//         ...prevState.user,
//         user
//       }
// }));

// <CreateComment
//   handleCommentChange={this.handleCommentChange}
//   commenttitle={this.state.newcomment.title}
//   commentbody={this.state.newcomment.body}
//   ecommenttitle={this.state.editcommenttitle}
//   ecommentbody={this.state.editcomment.body}
//   createComment={this.createComment}
// />
