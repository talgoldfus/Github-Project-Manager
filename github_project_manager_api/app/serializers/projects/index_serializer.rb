class Projects::IndexSerializer < ProjectSerializer
  attributes :access_level

  def access_level
    (instance_options[:user]).managed_projects.include?(object) ? "manager" : "collaborator"
  end

end
