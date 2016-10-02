Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :projects
      resources :taks
    end
  end
end
