module Adapter
  class Github
  attr_reader :user

    def initialize(gh_token)
      @client = Octokit::Client.new(:access_token => gh_token)
      @client.auto_paginate = true
      @user = @client.user
    end

    def get_results(action,params = nil)
      case action
        when 'search_owner_repos'
          search_result = @client.search_repositories( params+" "+"user:#{@client.user.login}" )
          search_result.items.map { |repo| {id:repo.id, name: repo.name , description: repo.description } }
        when 'get_project_collaborators'
          collaborators =  @client.collaborators(params)
          collaborators.map do |collaborator|
            project_collaborator = User.find_or_create_by(username: collaborator.login){|user| user.password="pending"}
            project_collaborator.collaborator
          end
      end
    end

  end
end
