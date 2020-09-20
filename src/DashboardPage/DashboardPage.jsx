import React from 'react';

import { authenticationService } from '@/_services';
import EmployeePage from '../EmployeePage/EmployeePage';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
    };
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <h1>Hi {currentUser.username}!</h1>
        <p>You're logged in</p>
        <EmployeePage></EmployeePage>
      </div>
    );
  }
}

export { DashboardPage };
