Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create]
    resources :restaurants, only: [:show, :index] do
      resources :menu_itmes, only: [:index]
    end
    resources :menu_items, only: [:show]
  end

  get '*path', to: "static_pages#frontend_index"
end
