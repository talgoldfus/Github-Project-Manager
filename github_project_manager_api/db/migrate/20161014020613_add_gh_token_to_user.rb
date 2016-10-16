class AddGhTokenToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :gh_token, :string
  end
end
