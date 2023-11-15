class Api::CartItemsController < ApplicationController

    def create
        @cart_item = Cart_item.new(params[:menu_item], params[:user_id], params[:quantity])
        if @cart_item.save
            render json: { message: 'Success'}
        else
            render json: { errors: ["Unable to add to cart"] }
        end
    end

    def destroy
    end

    def index
        @user = params[:user_id]
        @cart_items = @user.cart_items
        render :index
    end

    def update
    end
end
