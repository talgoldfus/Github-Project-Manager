class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :priority
      t.integer :project_id
      t.string :title
      t.text :description
      t.string :content
      t.string :status  , :default => 'todo'
      t.timestamps
    end
  end
end
