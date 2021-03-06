# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171127193509) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "backs", force: :cascade do |t|
    t.integer  "book_id",    null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_backs_on_book_id", using: :btree
  end

  create_table "books", force: :cascade do |t|
    t.string   "title",                          null: false
    t.string   "author_firstname"
    t.string   "author_lastname"
    t.string   "isbn"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.integer  "width",            default: 35
    t.integer  "height",           default: 200
    t.integer  "depth",            default: 150
    t.index ["author_lastname"], name: "index_books_on_author_lastname", using: :btree
    t.index ["isbn"], name: "index_books_on_isbn", unique: true, using: :btree
    t.index ["title"], name: "index_books_on_title", using: :btree
  end

  create_table "bookshelf_items", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "book_id",    null: false
    t.integer  "cover_id"
    t.integer  "spine_id"
    t.integer  "back_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_bookshelf_items_on_book_id", using: :btree
    t.index ["user_id"], name: "index_bookshelf_items_on_user_id", using: :btree
  end

  create_table "covers", force: :cascade do |t|
    t.integer  "book_id",    null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_covers_on_book_id", using: :btree
  end

  create_table "spines", force: :cascade do |t|
    t.integer  "book_id",    null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_spines_on_book_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.json     "request_token"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
