class Api::MenuItemsController < ApplicationController

    def index
        @restaurant = Restaurant.find(params[:restaurant_id])
        @menu_items = @restaurant.menu_items
        render :index
    end
end
