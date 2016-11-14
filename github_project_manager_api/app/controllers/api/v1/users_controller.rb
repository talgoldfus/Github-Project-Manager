module Api
  module V1
    class UsersController < ApplicationController

      def create
        # if params[:vallidation]
        #    user = User.find_by(username: params[:vallidation][:username])
        #    if user
        #      render json: {status: 'failed' }
        #    else
        #     render json: {status: 'successful' }
        #    end
        if params[:signup]
            user = User.create(signup_params)
            if user
              username = JsonWebToken.decode(params[:signup]["temp_token"])[:username]
              token = JsonWebToken.decode(params[:signup]["temp_token"])[:gh_token]
              user.update(gh_token: token , username: username )
              render json: {status: 'successful' }
            else
              render json: {status: 'failed' }
            end
        end
      end

      private

      def signup_params
        params.require(:signup).permit(:username, :password, :password_confirmation)
      end

    end
  end
end
