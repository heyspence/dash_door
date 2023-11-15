
@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :image_url
        json.menuItems restaurant.menu_items.map(&:id)
    end
end