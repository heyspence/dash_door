
@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :image_url, :icon_image_url
        json.menuItems restaurant.menu_items.map(&:id)
        # json.photoUrl restaurant.photo.attached ? restaurant.photo.url : null
    end
end