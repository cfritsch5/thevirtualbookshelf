
export const fillShelf = () => (
  $.ajax({
    method: 'GET',
    url: '/api/bookshelf_items',
  })
);

export const findbook = book => (
  $.ajax({
    method: 'POST',
    url:'/api/books', //route not configured yet, need some sort of find book implementation
    book: book
  })
);
