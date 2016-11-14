module Api
  module V1
    class GithubController < ApplicationController

    # before_action :authenticate_request!

      def create
          if params[:code]
            user_code = params[:code]
            response = HTTParty.post('https://github.com/login/oauth/access_token',:query =>
            {:client_id => ENV['gh_client_id'],
             :client_secret => ENV['gh_client_secret'],
             :code => user_code},headers: {accept: 'application/json'})
             if response["access_token"]
               username = GithubActions.new(response["access_token"]).user.login
               user = User.find_by(username: username )
               if user
                 user.update(gh_token: response["access_token"])
                 render json: {username: username ,connected:true ,existing_user:true}
                 search_owner_repos
               else
                 temp_token = JsonWebToken.encode({username:username,gh_token: response["access_token"]})
                 render json: {username: username ,connected:true ,existing_user:false , temp_token: temp_token}
               end
             else
                render status: 404, json: "User not found"
             end
          end
      end

     def show
       action = GithubActions.new(@current_user.gh_token)
       result = action.get_results(params[:id],params[:q])
       render json: result
     end

    end
  end
end
