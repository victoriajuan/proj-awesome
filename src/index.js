import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import firebase from 'firebase';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import SignUpForm, {SignInForm} from './SignUp';
import InsertClassForm, {InsertProfessorForm} from './Insert';
import Home from './Home';
import InsertCommentForm from './InsertCommentForm';
import Professor from './Professor';
import 'bootstrap/dist/css/bootstrap.css';

var config = {
  apiKey: "AIzaSyCmpNNVowzW0F58cvtf7liSOyieFUjPEpE",
  authDomain: "ival-281f0.firebaseapp.com",
  databaseURL: "https://ival-281f0.firebaseio.com",
  storageBucket: "ival-281f0.appspot.com",
  messagingSenderId: "582622995561"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="register" component={SignUpForm} />
      <Route path="login" component={SignInForm} />
      <Route path="home" component={Home} />
      <Route path="professor/:prof_class_id" component={Professor} />
      <Route path="insertClass" component={InsertClassForm} />
      <Route path="insertProfessor" component={InsertProfessorForm} />
      <Route path="class_has_professors/:class_has_professors_id" component={InsertCommentForm} />
    </Route>
  </Router>,
  document.getElementById('root')
);

//extraneous method call to produce error for non-configured app
firebase.auth(); 