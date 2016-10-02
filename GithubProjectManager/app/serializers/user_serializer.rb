class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :profile_picture
  has_many :projects
  has_many :tasks


end
