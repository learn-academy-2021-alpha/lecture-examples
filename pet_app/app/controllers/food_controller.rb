class FoodController < ApplicationController
  def beverage
    @bev_type = params[:type]
  end

  def tacos
    @number = params[:number]
    if @number.to_i >= 5
      @number = 'a platter of'
    else
      @number
    end
  end

  def icecream
    @flavor = params[:flavor]
    @topping = params[:topping]
  end

end
