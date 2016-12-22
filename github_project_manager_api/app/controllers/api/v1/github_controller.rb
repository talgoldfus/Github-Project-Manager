module Api
  module V1
    class GithubController < ApplicationController

     before_action :requireAuthentication

      def index
        byebug
      end

      def create
          if params[:code]
            user_code = params[:code]
            response = HTTParty.post('https://github.com/login/oauth/access_token',:query =>
            {:client_id => ENV['gh_client_id'],
             :client_secret => ENV['gh_client_secret'],
             :code => user_code},headers: {accept: 'application/json'})
             if response["access_token"]
               username = Adapter::Github.new(response["access_token"]).user.login
               user = User.find_or_create_by(username: username){|new_user| new_user.password="pending"}
               user.update(gh_token: response["access_token"])
               render json: {username: username ,connected:true ,existing_user: !user.authenticate("pending")}
             else
                render status: 404, json: "User not found"
             end
          end
      end

     def show
       action = Adapter::Github.new(@current_user.gh_token)
       result = action.get_results(params[:id],params[:q])
       render json: result
     end

     private

     def requireAuthentication
      params[:code] ? nil : authenticate_request!
     end


    end
  end
end
