class Project < ApplicationRecord
  has_many :collaborator_projects
  has_many :collaborators , through: :collaborator_projects
  has_many :project_manager_projects
  has_many :project_managers , through: :project_manager_projects
  has_many :tasks

end
