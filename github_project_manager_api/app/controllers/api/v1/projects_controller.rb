module Api
  module V1
    class ProjectsController < ApplicationController

      def index
       render json: Project.includes(:users,:managers), include: ['users' , 'managers']
      end

    end
  end
end
