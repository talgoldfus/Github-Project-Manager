class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :priority
      t.integer :project_id
      t.string :status  , :deafult => 'Pending'

      t.timestamps
    end
  end
end
