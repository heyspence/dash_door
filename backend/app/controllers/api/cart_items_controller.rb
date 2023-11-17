class Api::CartItemsController < ApplicationController

    def create
        @cart_item = CartItem.new(
            menu_item_id: params[:menu_item_id], 
            user_id: params[:user_id])
        if @cart_item.save
            render :show
        else
            render json: { errors: ["Unable to add to cart"] }
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item && @cart_item.destroy
            render json: { message: "Success"}
        else
            render json: { errors: ["Unable to find cart item"]}
        end
    end

    def index
        @user = User.find(params[:user_id])
        @cart_items = @user.cart_items
        if @cart_items
            render :index
        else
            render json: { errors: ["Unable to find any cart items"] }
        end
    end

    def show
        @cart_item = CartItem.find(params[:id])
        if @cart_item
            render :show
        else
            render json: { errors: ["Unable to find item"]}
        end
    end

    def update
    end
end
