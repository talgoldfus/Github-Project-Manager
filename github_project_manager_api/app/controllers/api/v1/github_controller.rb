module Api
  module V1
    class GithubController < ApplicationController

    before_action :authenticate_request!

      def create
          if params[:code]
            user_code = params[:code]
            response = HTTParty.post('https://github.com/login/oauth/access_token',:query =>
            {:client_id => ENV['gh_client_id'],
             :client_secret => ENV['gh_client_secret'],
             :code => user_code},headers: {accept: 'application/json'})
             if response["access_token"]
               @current_user.update(gh_token: response["access_token"])
               render json: {connected: 'True'}
             else
               render json: {connected: 'False'}
             end
          end
      end

       def action
          if @current_user.gh_token
            puts "Do some action"
          else
           redirect_to
          end
       end

    end
  end
end
