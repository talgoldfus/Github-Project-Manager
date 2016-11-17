class Projects::ShowSerializer < ProjectSerializer
  attributes :access_level, :collaborators , :project_managers
  has_many :tasks

  def access_level
    (instance_options[:access_level])
  end




end
