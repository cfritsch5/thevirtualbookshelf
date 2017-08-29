import * as BookUtil from './books_api_util';

export const receiveBooks = books => ({
  type: "RECEIVE_BOOKS",
  books
});

export const fetchbooks = () => dispatch => (
  BookUtil.fillShelf().then(books => (
    dispatch(receiveBooks(books))
  ))
);
