class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.integer :repo_id
      t.string :title
      t.boolean :public , :default => true
      t.timestamps
    end
  end
end
