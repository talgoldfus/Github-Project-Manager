Rails.application.routes.draw do
  post 'auth_user' => 'authentication#authenticate_user'
  post 'logout' => 'authentication#logout'
  post 'auth_token' => 'authentication#auth_token'

  namespace :api do
    namespace :v1 do
      post 'github-callback' => 'github#create'
      get 'action/:id' => 'github#show'
      resources :users
      resources :projects
      resources :tasks
    end
  end
end
