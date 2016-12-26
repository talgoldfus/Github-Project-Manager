module Api
  module V1
    class ProjectsController < ApplicationController
      before_action :authenticate_request!


      def index
        if params[:recent]
          amount = params[:recent].to_i
          recent_projects = @current_user.all_projects.sort_by{|p| p.updated_at }.reverse[0...amount]
          render json: recent_projects , each_serializer: Projects::IndexSerializer ,user: @current_user , key_transform: :underscore
        else
          render json: {manager: @current_user.managed_projects , collaborator: @current_user.collaborator_projects}
        end
      end

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
        project = Project.find_by(repo_id: params[:project][:id] )
        if !project
          github = Adapter::Github.new(@current_user.gh_token)
          project = Project.create(repo_id: params[:project][:id], title: params[:project][:title])
          project.project_managers.push(@current_user.project_manager)
          project.collaborators = github.get_results('get_project_collaborators',params[:project][:id])
          project.save
        end
        render json: {project_id: project.id}
      end

    end
  end
end
