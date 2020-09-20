import React from 'react';

import { authenticationService } from '@/_services';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    // redirect to dashboard if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push('/');
    }
  }

  getUserName(event) {
    this.setState(
      { username: event.target.value }
    );
  }

  getPassword(event) {
    this.setState(
      { password: event.target.value }
    );
  }

  onSubmit(event) {

    authenticationService.login(this.state.username, this.state.password)
      .then(
        user => {
          const { from } = this.props.location.state || { from: { pathname: "/" } };
          this.props.history.push(from);
        },
        error => {
          alert(error);
        }
      ).catch(function (error) {
        alert(error);
      });

  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <h3>Login</h3>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange={(event, newValue) => this.getUserName(event, newValue)} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange={(event, newValue) => this.getPassword(event, newValue)} />
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={(event) => this.onSubmit(event)}>Submit</button>

      </form>
    );
  }
}

export { LoginPage };
