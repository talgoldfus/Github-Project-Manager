class Projects::ShowSerializer < ProjectSerializer
  attributes :access_level, :collaborators , :project_managers
  has_many :tasks

  def access_level
    (instance_options[:access_level])
  end

  def collaborators
    object.user_collaborators.map do |user|
       User::UserSerializer.new(user,{})
    end
  end

  def project_managers
    object.user_project_managers.map do |user|
       User::UserSerializer.new(user,{})
    end
  end

end
