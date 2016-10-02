class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :repo, :public
end
