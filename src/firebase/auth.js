import { auth } from './firebase';
// Creating the Firebase Auth API

// Sign Up:
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
  auth.signOut();

export const doPasswordReset = (email) =>
  auth.sendPasswordReset(email);

export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
  

/* That’s it for the whole authentication interface for your React components
to be connected to the Firebase API.
It covers all the use cases for the purpose of this tutorial.
Finally, you should expose the implemented authentication methods and the
Firebase functionalities itself from your Firebase module. */
