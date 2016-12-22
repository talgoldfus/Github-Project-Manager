module Api
  module V1
    class UsersController < ApplicationController

      def create
        if params[:signup]
            username = JsonWebToken.decode(params[:signup]["temp_token"])[:username]
            token = JsonWebToken.decode(params[:signup]["temp_token"])[:gh_token]
            user = User.find_by(username: username)
            user && user.authenticate("pending") ? user.update(update_params) : user = User.create(signup_params)
            user.update(gh_token: token , profile_picture: Adapter::Github.new(token).user.avatar_url)
            render json: {message: "User created successfully"}
        end
      end

      private

      def signup_params
        params.require(:signup).permit(:username, :password, :password_confirmation)
      end

      def update_params
        params.require(:signup).permit(:password, :password_confirmation)
      end

    end
  end
end
