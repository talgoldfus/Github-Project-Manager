module Api
  module V1
    class ProjectsController < ApplicationController
      before_action :authenticate_request!


      def show
        project = Project.find(params[:id])
        byebug
        if (@current_user.projects.find{|p| p.id == project.id})
          access_level =  project.managers.find{|user| user.id == @current_user.id} ? 'manager' : 'user'
          render json: {project: project , user_access_level: access_level} ,include: ['tasks'] ,serializer: Projects::ShowSerializer
        else
          render  json: "Project not found" ,status: 404
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
