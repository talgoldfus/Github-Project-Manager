
class GithubActions


  def initialize(current_user)
    @client = Octokit::Client.new(:access_token => current_user.gh_token)
    @client.auto_paginate = true
    @user = @client.user
  end

  def get_results(action,params = nil)

    case action
      when 'search_owner_repos'
        search_result = @client.search_repositories( params+" " +"user:#{@client.user.login}" )
        return self.adapt_search_results(search_result)
      when ''

      when ''

    end
  end

  def adapt_search_results(search_result)
    search_result.items.map do |repo|
      {id:repo.id, name: repo.name , description: repo.description , language: repo.language }
    end
  end

end
