class CreateBookshelfItems < ActiveRecord::Migration[5.0]
  def change
    create_table :bookshelf_items do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.integer :cover_id
      t.integer :spine_id
      t.integer :back_id

      t.timestamps
    end

    add_index :bookshelf_items, :user_id
    add_index :bookshelf_items, :book_id
  end
end
