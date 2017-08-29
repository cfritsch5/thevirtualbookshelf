import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import BookShelfContainer from '../bookshelf/bookshelf_container';
import SessionFormContainer from './session_form_container';

const Home = ({ currentUser, logout }) => {
  if (currentUser) {
  return  <BookShelfContainer/>;
  } else {
    return <SessionFormContainer/>;
  }
};

export default Home;
