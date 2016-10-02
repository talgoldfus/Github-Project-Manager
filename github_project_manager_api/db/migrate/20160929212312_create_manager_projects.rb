class CreateManagerProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :manager_projects do |t|
      t.integer :project_id
      t.integer :manager_id

      t.timestamps
    end
  end
end
