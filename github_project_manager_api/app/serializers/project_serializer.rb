class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :repo_id, :public
  attribute :collaborators
  attribute :project_managers

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
