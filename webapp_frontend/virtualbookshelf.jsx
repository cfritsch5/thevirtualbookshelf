import React from 'react';
import ReactDOM from 'react-dom';
import Root from './main/root';
import configureStore from './main/store';

// Testing __________________
// import * as SessionUtil from './session_api_util';
import * as BookUtil from './main/bookshelf/books_api_util';
import * as BookActions from './main/bookshelf/book_actions';
// import * as LessonUtil from "./util/lessons_util";
// Testing __________________


document.addEventListener('DOMContentLoaded', () => {
  // console.log("wide",window.innerWidth); //get window width
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // Testing __________________
  window.store = store;
  window.BookUtil = BookUtil;
  window.BookActions = BookActions;
  // window.LessonUtil = LessonUtil;
  // window.LessonActions = LessonActions;
  // Testing __________________

});
