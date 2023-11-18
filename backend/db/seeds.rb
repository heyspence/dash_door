require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Creating Restaurants"

restaurant = Restaurant.create([
    { name: "McDonald's", image_url: "http://spencerheywood.com/images/dash_door/mcdonalds-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/mcdonalds-logo.avif"}, 
    { name: 'Tacobell', image_url: "http://spencerheywood.com/images/dash_door/taco-bell-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/taco-bell-logo.avif"},
    { name: 'Subway', image_url: "http://spencerheywood.com/images/dash_door/subway-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/subway-logo.avif"},
    { name: '7-Eleven'},
    { name: 'Walgreens'},
    { name: 'Halal'},
])

# restaurant[0].photo.attached(io: URI.open("https://dash-door-seeds.s3.amazonaws.com/new_landing_page.webp"), filename: "new_landing_page.webp")
puts "Creating demo user"

user = User.create([
    { first_name: 'Demo', last_name: 'User', email: 'demo@dashdoor.com', password: 'password',phone_number: '1002003000',}
])

puts "Creating menu items"

menu_item = MenuItem.create([
    {name: 'French Fries', price: '3.39', restaurant_id: 1, image_url: "http://spencerheywood.com/images/dash_door/mcdonalds-fries.avif"},
    {name: 'McChicken', price: '4.99', restaurant_id: 1, image_url: "http://spencerheywood.com/images/dash_door/mcdonalds-mcchicken.avif"},
    {name: '10 Piece McNuggets', price: '7.59', restaurant_id: 1, image_url: "http://spencerheywood.com/images/dash_door/mcdonalds-10pc-nuggets.avif"},
    {name: '2 Cheeseburger Meal', price: '10.99', restaurant_id: 1, image_url: "http://spencerheywood.com/images/dash_door/mcdonalds-2-cheeseburger-meal.avif"},
    {name: '10 Piece McNuggets Meal', price: '12.79', restaurant_id: 1, image_url: "http://spencerheywood.com/images/dash_door/mcdonalds-10-piece-mcnuggets-meal.avif"},
    {name: 'Big Mac Meal', price: '12.29', restaurant_id: 1, image_url: "http://spencerheywood.com/images/dash_door/mcdonalds-big-mac-meal.avif"},
    {name: 'Chicken Quesadilla', price: '6.58', restaurant_id: 2, image_url: "http://spencerheywood.com/images/dash_door/taco-bell-chicken-quesadilla.avif"},
    {name: 'Crunchwrap Supreme', price: '6.58', restaurant_id: 2, image_url: "http://spencerheywood.com/images/dash_door/taco-bell-crunchwrap-supreme.avif"},
    {name: '3 Doritos Locos Tacos Supreme', price: '13.41', restaurant_id: 2, image_url: "http://spencerheywood.com/images/dash_door/taco-bell-3-doritos-locos-tacos-supreme.avif"},
    {name: 'Nacho Cheese Doritos Locos Tacos', price: '3.53', restaurant_id: 2, image_url: "http://spencerheywood.com/images/dash_door/taco-bell-nach-cheese-doritos-locos-tacos.avif"},
    {name: 'Oven-Roasted Turkey', price: '8.83', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-oven-roasted-turkey.avif"},
    {name: 'Tuna', price: '8.83', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-tuna.avif"},
    {name: 'Sweet Onion Chicken Teriyaki', price: '9.90', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-sweet-onion-chicken-teriyaki.avif"},
    {name: 'Coca-Cola Classic', price: '3.64', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-coca-cola-classic.avif"},
    {name: 'Meatball Marinara', price: '8.48', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-meatball-marinara.avif"},
])

puts "Done!"