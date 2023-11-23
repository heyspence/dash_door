class Api::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
        return :index 
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end
end
