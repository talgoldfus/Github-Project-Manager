class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :repo, :public

  has_many :users  
  has_many :managers
  has_many :tasks



end
