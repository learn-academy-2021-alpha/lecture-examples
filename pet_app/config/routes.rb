Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'main#hello'
  #http method '/URL segment' => 'controller#method'
  get '/supercalifragilisticexpialidocious' => 'main#hello'

  get '/reminder' => 'main#reminder'
  # get '/' => 'main#hello'

  get '/beverage/:type' => 'food#beverage'

  get '/tacos/:number' => 'food#tacos'

  get '/icecream/:flavor/:topping' => 'food#icecream'
end
