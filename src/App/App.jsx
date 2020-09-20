import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { DashboardPage } from '@/DashboardPage';
import { LoginPage } from '@/LoginPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Router history={history}>
          <div>
            {currentUser &&
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav">
                  <Link to="/" className="nav-item nav-link active">Dashboard</Link>
                  <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                </div>
              </nav>
            }
            <div className="jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <PrivateRoute exact path="/" component={DashboardPage} />
                  </div>
                  <div className="col-lg-6 offset-lg-3">
                    <Route path="/login" component={LoginPage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

