module Api
  module V1
    class ProjectsController < ApplicationController
     before_action :public?

      def index
        if params[:public]
          projects = Project.all.select {|p| p.public }
          render json: projects , each_serializer: Projects::IndexSerializer
        else
          render json: Project.includes(:users,:managers), include: ['users' , 'managers'] , each_serializer: Projects::IndexSerializer
        end
      #  render json: Project.includes(:users,:managers), include: ['users' , 'managers']
      end

      private
      # Skips authentication if user wants to see public projects.
      def public?
        return if params[:public]
        authenticate_request!
      end

    end
  end
end
