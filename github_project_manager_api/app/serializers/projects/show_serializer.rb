class Projects::ShowSerializer < ProjectSerializer
  attributes :collaborators , :project_managers
  has_many :tasks



end
