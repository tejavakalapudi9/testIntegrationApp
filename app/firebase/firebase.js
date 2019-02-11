import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDA9B0faLk16WJ881-dNemELs9_0cFIwk0',
  authDomain: 'beatbiz-dev.firebaseapp.com',
  databaseURL: 'https://beatbiz-dev.firebaseio.com',
  projectId: 'beatbiz-dev',
  storageBucket: 'beatbiz-dev.appspot.com',
  messagingSenderId: '868448500755'
};

firebase.initializeApp(config);

const authProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, authProvider };
