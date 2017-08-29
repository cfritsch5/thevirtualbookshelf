import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      username: '',
      password: '',
      confirmpassword: ''
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(e.currentTarget.value);
  //   const user = this.state;
  //   this.props.processForm({user});
  // }

  navLink() {
    let login = "Login", signup = "Sign Up";
    if (this.props.formType === 'login') {
      return (<div className="signup-v-login">
        <input type="submit" value={login} />
        <Link to="/signup">{signup} instead</Link>
      </div>
    );
    } else {
      return(<div className="signup-v-login">
        <input type="submit" value={signup} />
        <Link to="/login">{login} instead</Link>
       </div>
     );
    }
  }

  signupform(){
    return(
      <div>
        <div className="login-form-item">
            <input type="text"
              value={this.state.confirmpassword}
              placeholder='confirm password'
              onChange={this.update('confirmpassword')}
              className="login-input"
            />
        </div>
        <div className="login-form-item">
            <input type="text"
              value={this.state.email}
              placeholder='email'
              onChange={this.update('email')}
              className="login-input"
            />
        </div>
      </div>
    );
  }

  login(e){
    if(this.state.signup){
      this.setState({signup: false});
      this.props.error([]);
    } else {
      e.preventDefault();
      const user = this.state;
      this.props.login({user});
    }
  }

  signup(e){
    e.preventDefault();
    if (this.state.signup) {
      const user = this.state;
      if (this.state.password === this.state.confirmpassword){
        this.props.signup({user});
      } else {
        console.log("error!!!!!!!!!!!");
        this.props.error(["Passwords do not match"]);
      }
    } else {
      this.props.error([]);
      this.setState({signup: true});
    }
  }

  logout(e){
    e.preventDefault();
    const user = this.state;
    this.props.logout({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let signup;
    if(this.state.signup) signup = this.signupform();
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form-item">
              <input type="text"
                value={this.state.username}
                placeholder='Username'
                onChange={this.update('username')}
                className="login-input"
              />
          </div>
          <div className="login-form-item">
              <input type="password"
                value={this.state.password}
                placeholder='Password'
                onChange={this.update('password')}
                className="login-input"
              />
            </div>
            {signup}
            <button onClick={this.login}>login</button>
            <button onClick={this.signup}>signup</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
