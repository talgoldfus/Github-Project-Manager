module Api
  module V1
    class ProjectsController < ApplicationController
      before_action :authenticate_request!


      def show
        project = Project.find(params[:id])
        if (@current_user.all_projects.find{|p| p.id == project.id})
          access_level = project.user_project_managers.find{|manager| manager == @current_user} ? 'manager' : 'collaborator'
          render json:  project ,include: ['tasks'] , serializer: Projects::ShowSerializer , access_level: access_level , key_transform: :underscore
        else
          project.errors.add(:id, "Project not found")
          render json: project , status: 404, serializer: ActiveModel::Serializer::ErrorSerializer
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
