class Tasks::IndexSerializer < TaskSerializer
  attributes :id , :description ,:priority ,:status ,:title , :project


  def project
    Project::ProjectSerializer.new(object.project,{})
  end

end
