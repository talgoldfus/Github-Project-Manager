class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :repo
      t.string :title
      t.boolean :public , :deafult => true
      t.timestamps
    end
  end
end
