import { BehaviorSubject } from 'rxjs';

import { handleResponse } from '@/_helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() { return currentUserSubject.value }
};

function login(username, password) {

  return new Promise((resolve) => {

    if (username === 'abc@gmail.com' && password === 'abc') {

      resolve({
        ok: true,
        text: () => Promise.resolve(JSON.stringify({
          username: username,
          token: 'fake-jwt-token'
        }))
      })

    } else {

      resolve({
        status: 400,
        text: () => Promise.resolve(JSON.stringify('Username or password is incorrect'))
      })

    }

  }, 500)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    });

}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
}
