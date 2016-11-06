module Api
  module V1
    class ProjectsController < ApplicationController
      before_action :authenticate_request!

      def index
        # if params[:public]
        #   projects = Project.all.select {|p| p.public }
        #   render json: projects , each_serializer: Projects::IndexSerializer
        # else
        #   render json: Project.includes(:users,:managers), include: ['users' , 'managers'] , each_serializer: Projects::IndexSerializer
        # end
      #  render json: Project.includes(:users,:managers), include: ['users' , 'managers']
      end

      def create

        project = Project.find_by(repo_id: params[:project].id)
        if !project
          Project.create(repo_id: params[:project].id, title: params[:project].title)
        end
        byebug
      end

    end
  end
end
