
export const receiveBooks = books => ({
  type: "RECEIVE_BOOKS",
  books
});

export const newPos = pos => ({
  type: "NEW_POS",
  pos
});

export const fetchbooks = () => dispatch => (
  fillShelf().then(books => (
    dispatch(receiveBooks(books))
  ))
);

export const updatePosition = (pos) => dispatch => (
    dispatch(newPos(pos))
);

export const fillShelf = () => (
  $.ajax({
    method: 'GET',
    url: '/api/bookshelf_items',
  })
);

// export const findbook = book => (
//   $.ajax({
//     method: 'POST',
//     url:'/api/books', //route not configured yet, need some sort of find book implementation
//     book: book
//   })
// );
