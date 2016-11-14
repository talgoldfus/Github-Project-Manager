class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :repo_id, :public

end
