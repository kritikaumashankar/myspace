Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
    
   resources :posts, only: [:index, :create, :update, :destroy]
   
    resources :friends, only: [:index, :show, :update] do
      resources :posts, only: [:index]
    end
    get 'my_friends', to: 'friends#my_friends'
  end

  #Do not place any routes below this one
    get '*other', to: 'static#index'
end
