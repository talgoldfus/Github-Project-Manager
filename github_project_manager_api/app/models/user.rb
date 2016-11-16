class User < ApplicationRecord
  has_one :project_manager
  has_one :collaborator
  has_secure_password
  after_create :create_dependencies

  def create_dependencies
    self.project_manager = ProjectManager.new()
    self.collaborator = Collaborator.new()
  end

  def all_projects
    self.collaborator.projects + self.project_manager.projects
  end

  def collaborator_tasks
    self.collaborator.tasks
  end

  def managed_projects
    self.project_manager.projects
  end

end
