Rails.application.routes.draw do
  scope '/api' do
  post 'user_token' => 'user_token#create'
  resources :users do
    resources :posts
  end
  resources :posts do
    resources :comments
  end



end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
