module Api
  module V1
    class GithubController < ApplicationController

    before_action :authenticate_request! , except: :index

      def index
        byebug
          if params[:code]
          user_code = params[:code]
          response = HTTParty.post('https://github.com/login/oauth/access_token',:query =>
          {:client_id => ENV['gh_client_id'],
           :client_secret => ENV['gh_client_secret'],
           :code => user_code},headers: {accept: 'application/json'})
           @current_user.gh_token = response["access_token"]
           redirect_to session[:redirect_uri]
          end
      end

     def action
       byebug
        session[:redirect_uri] = params[:redirect_uri]
        if @current_user.gh_token
          puts "Do some action"
        else
         redirect_to "https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=#{ENV['gh_client_id']}"
        end
     end

      private
      # Skips authentication if user wants to see public projects.
      # def public?
      #   return if params[:public]
      #   authenticate_request!
      # end

    end
  end
end
