module Api
  module V1
    class UsersController < ApplicationController

      def create
        if params[:signup]
            user = User.find_by(username: params[:signup]["username"])
            profile_picture_link = Adapter::Github.new(user.gh_token).user.avatar_url
            byebug
            user.update(
              password: params[:signup][:password],
              password_confirmation: params[:signup][:password_confirmation],
              profile_picture: profile_picture_link
            )
            render json: {message: "User created successfully"}
        end
      end

    end
  end
end
