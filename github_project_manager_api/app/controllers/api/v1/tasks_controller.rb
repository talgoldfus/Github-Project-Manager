module Api
  module V1
    class TasksController < ApplicationController
      before_action :authenticate_request!

      def update
        byebug
        if params[:update_task]
            task = Task.find(params[:update_task][:id])
            task.update(update_params)
            render json: {status: 'Task updated successfuly' }
        end
      end

      private

      def update_params
        params.require(:update_task).permit(:id , :content , :description ,:priority ,:status ,:title,:assignees)
      end

    end
  end
end
