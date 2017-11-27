# json.array! @bookshelf_items do |book|
#   json.partial! 'book', book: Book.find(book.book_id)
#   json.cover Cover.find(book.cover_id).image_url
#   json.spine Spine.find(book.spine_id).image_url
#   json.back Back.find(book.back_id).image_url
# end

@bookshelf_items.each do |book|
  json.set! book.id do
    json.partial! 'book', book: Book.find(book.book_id)
    json.cover Cover.find(book.cover_id).image_url
    json.spine Spine.find(book.spine_id).image_url
    json.back Back.find(book.back_id).image_url
  end
end
