import firebase from 'firebase/app'
import 'firebase/auth';


const prodConfig = {
    apiKey: "AIzaSyDLTtgoQXU1_pVcqaRh7roi9l7Xk5XABIA",
    authDomain: "fir-auth-production.firebaseapp.com",
    databaseURL: "https://fir-auth-production.firebaseio.com",
    projectId: "fir-auth-production",
    storageBucket: "fir-auth-production.appspot.com",
    messagingSenderId: "292022594109"
  };

const devConfig = {
    apiKey: "AIzaSyBxUXfXDJrEa1pnsPcT5we2t3hkIBaQ8eI",
    authDomain: "fir-auth-925a0.firebaseapp.com",
    databaseURL: "https://fir-auth-925a0.firebaseio.com",
    projectId: "fir-auth-925a0",
    storageBucket: "fir-auth-925a0.appspot.com",
    messagingSenderId: "778510454513"
  };

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};
