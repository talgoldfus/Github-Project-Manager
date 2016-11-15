class ProjectManager < ApplicationRecord
  belongs_to :user
  has_many :project_manager_projects
  has_many :projects , through: :project_manager_projects

end
