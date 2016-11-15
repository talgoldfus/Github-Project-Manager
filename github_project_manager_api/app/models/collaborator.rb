class Collaborator < ApplicationRecord
  belongs_to :user
  has_many :collaborator_tasks
  has_many :tasks , through: :collaborator_tasks
  has_many :collaborator_projects
  has_many :projects , through: :collaborator_projects

end
