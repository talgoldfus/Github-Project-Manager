module Api
  module V1
    class TasksController < ApplicationController
      before_action :authenticate_request!

      def update
        if params[:update_task]
            task = Task.find(params[:update_task][:id])
            task.update(update_params)
            render json: {status: 'Task updated successfuly' }
        end
      end

      def create
            # for Development testing use this line : project= Project.find(2)
            project = Project.find_by(repo_id: params[:new_task][:project_id])
            task  =  Task.new(create_params)
            task.project = project
            task.save
            render json: task
      end

      private

      def update_params
        params.require(:update_task).permit(:id , :content , :description ,:priority ,:status ,:title,:assignees)
      end

      def create_params
        params.require(:new_task).permit(:id , :content , :description ,:priority ,:status ,:title,:assignees ,:project_id)
      end

    end
  end
end
