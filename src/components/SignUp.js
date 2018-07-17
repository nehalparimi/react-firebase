import React, { Component } from 'react';
import { Link,
  withRouter, } from 'react-router-dom';

import * as routes from '../constants/routes';
import { auth } from '../firebase';

const SignUpPage = ({history}) =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history}/>
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
// object destructuring
// spreading props

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const { history } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({error: error});
      });

    event.preventDefault();
  }



  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''


    return(
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState({username: event.target.value})}
          type="text"
          placeholder="Username"
        />

        <input
          value={email}
          onChange={event => this.setState({email: event.target.value})}
          type="text"
          placeholder="Email"
        />

        <input
          value={passwordOne}
          onChange={event => this.setState({passwordOne: event.target.value})}
          type="text"
          placeholder="Enter a password"
        />

        <input
          value={passwordTwo}
          onChange={event => this.setState({passwordTwo: event.target.value})}
          type="text"
          placeholder="Confirm your password"
        />

      <button disabled={isInvalid} type="Submit">
        Submit
      </button>

      { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have a profile?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up Here</Link>
  </p>

export default withRouter(SignUpPage);
export {
  SignUpForm,
  SignUpLink,
};
