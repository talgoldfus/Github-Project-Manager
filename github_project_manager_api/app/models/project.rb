class Project < ApplicationRecord
  has_many :collaborator_projects
  has_many :collaborators , through: :collaborator_projects
  has_many :project_manager_projects
  has_many :project_managers , through: :project_manager_projects
  has_many :tasks

  def user_collaborators
    self.collaborators.map{|c| c.user}
  end

  def user_project_managers
    self.collaborators.map{|c| c.user}
  end

end
