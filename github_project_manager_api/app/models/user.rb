class User < ApplicationRecord
  has_one :project_manager
  has_one :collaborator

  has_secure_password

  def all_projects
    self.collaborator.projects + self.project_manager.projects
  end

end
