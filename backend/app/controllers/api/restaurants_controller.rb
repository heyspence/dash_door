class Api::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
        return :index 
    end

end
