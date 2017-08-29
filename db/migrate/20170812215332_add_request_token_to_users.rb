class AddRequestTokenToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :request_token, :json
  end
end
