class CreateProjectManagers < ActiveRecord::Migration[5.0]
  def change
    create_table :project_managers do |t|
      t.integer :user_id
      t.timestamps
    end
  end
end
