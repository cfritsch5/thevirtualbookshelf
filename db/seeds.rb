# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Book.destroy_all
Cover.destroy_all
Spine.destroy_all
Back.destroy_all

user1 = User.create!(username: "user1", email: "user1@example.com", password: "password")
user2 = User.create!(username: "user2", email: "user2@example.com", password: "password")
user3 = User.create!(username: "user3", email: "user3@example.com", password: "password")

book1 = Book.create!(title: "Hobbit, The", author_lastname: "Tolkien",
  author_firstname: "JRR", isbn: "9780007887705", height:275,width:50,depth:200)
book2 = Book.create!(title: "Harry Potter and the Chamber of Secrets",
  author_lastname: "Rowling", author_firstname: "JK", isbn: "0439064872")
book3 = Book.create!(title: "Harry Potter and the Philosophers Stone",
  author_lastname: "Rowling", author_firstname: "JK", isbn: "0747532699")

Cover.create!(image_url: "dummyurl.book1.coverA", book_id: book1.id)
Cover.create!(image_url: "dummyurl.book1.coverB", book_id: book1.id)
Cover.create!(image_url: "dummyurl.book1.coverC", book_id: book1.id)
Cover.create!(image_url: "dummyurl.book2.coverA", book_id: book2.id)
Cover.create!(image_url: "dummyurl.book3.coverA", book_id: book3.id)
Spine.create!(image_url: "dummyurl.book1.spineA", book_id: book1.id)
Spine.create!(image_url: "dummyurl.book2.spineA", book_id: book2.id)
Spine.create!(image_url: "dummyurl.book3.spineA", book_id: book3.id)
Back.create!(image_url: "dummyurl.book1.backA", book_id: book1.id)
Back.create!(image_url: "dummyurl.book2.backA", book_id: book2.id)
Back.create!(image_url: "dummyurl.book3.backA", book_id: book3.id)

user1.add_book(book1)
user1.add_book(book2)
user1.add_book(book3)
