class TaskSerializer < ActiveModel::Serializer
  attributes :id , :content , :description ,:priority ,:status ,:title
  attribute :assignees

  def assignees
    object.user_collaborators.map do |user|
       User::UserSerializer.new(user,{})
    end
  end

end
