import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes'

const SignInPage = ({history}) =>
  <div>
    <h1>Sign In</h1>
    <SignInForm history={history}/>
    <SignUpLink />
  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email,
        password,
        error } = this.state;

    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({ error: error });
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input value={email}
               onChange={event => this.setState({ email: event.target.value })}
               type="text"
               placeholder="Email"
        />
        <input value={password}
               onChange={event => this.setState({ password: event.target.value })}
               type="text"
               placeholder="Password"
        />

      <button disabled={isInvalid} type="submit">Sign In</button>


      { error && <p>{error.message}</p> }
      </form>

    );
  }

}

export default withRouter(SignInPage);
export {
  SignInForm
};
