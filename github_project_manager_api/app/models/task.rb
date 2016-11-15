class Task < ApplicationRecord
  belongs_to :project
  has_many :collaborator_tasks
  has_many :collaborators , through: :collaborator_tasks

end
