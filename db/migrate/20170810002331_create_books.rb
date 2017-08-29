class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author_firstname
      t.string :author_lastname
      t.string :isbn

      t.timestamps
    end
    add_index :books, :title
    add_index :books, :isbn, unique: true
    add_index :books, :author_lastname
  end
end
