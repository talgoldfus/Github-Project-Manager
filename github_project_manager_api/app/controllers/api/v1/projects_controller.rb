module Api
  module V1
    class ProjectsController < ApplicationController

      def index
        byebug
        if params[:public]
          projects = Project.all.select {|p| p.public }
          render json: projects , each_serializer: Projects::IndexSerializer
        else
          render json: Project.includes(:users,:managers), include: ['users' , 'managers'] , each_serializer: Projects::IndexSerializer
        end
      #  render json: Project.includes(:users,:managers), include: ['users' , 'managers']
      end

    end
  end
end
