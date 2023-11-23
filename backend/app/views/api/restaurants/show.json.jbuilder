json.set! @restaurant.id do
    json.extract! @restaurant, :id, :name, :image_url, :icon_image_url
end