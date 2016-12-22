module Api
  module V1
    class TasksController < ApplicationController
      before_action :authenticate_request!

      def index
        render json: @current_user.collaborator_tasks , each_serializer: Tasks::IndexSerializer ,key_transform: :underscore
      end

      def update
            task = Task.find(params[:update_task][:id])
            task.update(update_params)
            task.collaborators = params[:update_task][:assignees].map {|assignee| User.find_by(username: assignee[:user]).collaborator}
            task.save
            render json: task
      end

      def create
            project = Project.find_by(repo_id: params[:new_task][:project_id])
            task  =  Task.new(create_params)
            task.project = project
            task.collaborators = params[:new_task][:assignees].map {|assignee| User.find_by(username: assignee[:user]).collaborator}
            task.save
            render json: task
      end

      def destroy
         Task.delete(params[:id])
         render json: "Task successfuly deleted"
      end

      private

      def update_params
        params.require(:update_task).permit(:id , :content , :description ,:priority ,:status ,:title)
      end

      def create_params
        params.require(:new_task).permit(:id , :content , :description ,:priority ,:status ,:title,:project_id)
      end

    end
  end
end
