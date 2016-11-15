class CreateCollaboratorTask < ActiveRecord::Migration[5.0]
  def change
    create_table :collaborator_tasks do |t|
      t.integer :task_id
      t.integer :collaborator_id
    end
  end
end
