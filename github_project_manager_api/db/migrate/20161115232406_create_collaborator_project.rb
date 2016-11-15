class CreateCollaboratorProject < ActiveRecord::Migration[5.0]
  def change
    create_table :collaborator_projects do |t|
      t.integer :collaborator_id
      t.integer :project_id
    end
  end
end
