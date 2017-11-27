class AddDimensionsToBook < ActiveRecord::Migration[5.0]
  def change
    add_column :books, :width, :integer, :default => 35
    add_column :books, :height, :integer, :default => 200
    add_column :books, :depth, :integer, :default => 150
  end
end
