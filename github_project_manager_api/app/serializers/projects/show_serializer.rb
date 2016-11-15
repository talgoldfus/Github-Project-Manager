class Projects::ShowSerializer < ProjectSerializer
  has_many :project_managers
  has_many :collaborators
  has_many :tasks



end
