Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show]
    resources :cart_items, only: [:create, :destroy, :show]

    resources :user, only: [:index] do
      resources :cart_items, only: [:index]
    end

    resources :restaurants, only: [:index] do
      resources :menu_items, only: [:index]
      resources :reviews, only: [:index, :create]
    end
    resources :menu_items, only: [:show]
    resources :reviews, only: [:destroy, :show, :update]
  end

  get '*path', to: "static_pages#frontend_index"
end
