class CreateCovers < ActiveRecord::Migration[5.0]
  def change
    create_table :covers do |t|
      t.integer :book_id, null: false
      t.string :image_url, null: false

      t.timestamps
    end

    add_index :covers, :book_id
  end
end
