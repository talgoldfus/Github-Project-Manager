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

      def show
        project = Project.find(params[:id])
        if (@current_user.projects.find{|p| p.id == project.id})
          render json: project ,include: ['tasks'] ,serializer: Projects::ShowSerializer
        else
          render status: 404, json: "Project not found"
        end
      end

      def create
        project = Project.find_by(repo_id: params[:project][:id])
        if !project
          project = Project.create(repo_id: params[:project][:id], title: params[:project][:title])
        end
        render json: {project_id: project.id}
      end

    end
  end
end
