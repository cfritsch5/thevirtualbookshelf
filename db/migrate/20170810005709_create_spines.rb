class CreateSpines < ActiveRecord::Migration[5.0]
  def change
    create_table :spines do |t|
      t.integer :book_id, null: false
      t.string :image_url, null: false

      t.timestamps
    end

    add_index :spines, :book_id
  end
end
