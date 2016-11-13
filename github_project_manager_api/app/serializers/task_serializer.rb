class TaskSerializer < ActiveModel::Serializer
  attributes :id , :description ,:priority ,:status ,:title 

end
