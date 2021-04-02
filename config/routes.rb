Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :posts do
    resources :comments
  end
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# get 'users/:user_id/posts', to: 'posts#user_index'
end
