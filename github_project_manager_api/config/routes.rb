Rails.application.routes.draw do
  post 'auth_user' => 'authentication#authenticate_user'

  namespace :api do
    namespace :v1 do
      get 'github-callback' => 'github#index'
      resources :users
      resources :projects
      resources :taks
    end
  end
end
