Rails.application.routes.draw do
  devise_for :user

  namespace :api do
    namespace :v1 do
      resources :polls
      resources :votes
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
