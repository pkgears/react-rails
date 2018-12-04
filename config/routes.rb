Rails.application.routes.draw do
  root 'home#index'

  post '/contact' => 'home#contact';

  match '*path', to: 'home#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
