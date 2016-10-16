module Api
  module V1
    class UsersController < ApplicationController

      def create
        if params[:vallidation]
           user = User.find_by(username: params[:vallidation][:username])
           if user
             render json: {status: 'failed' }
           else
            render json: {status: 'successful' }
           end
        elsif params[:signup]
          user = User.create(signup_params)
          if user
            render json: {status: 'successful' }
          else
            render json: {status: 'failed' }
          end
        end
      end

      private

      def signup_params
        params.require(:signup).permit(:name, :username, :password, :password_confirmation)
      end

    end
  end
end
