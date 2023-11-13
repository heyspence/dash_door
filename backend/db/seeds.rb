# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

restaurant = Restaurant.create([
    { name: 'McDonalds'}, 
    { name: 'TacoBell'},
    { name: 'Subway'}
])

user = User.create([
    { first_name: 'Demo', last_name: 'User', email: 'demo@dashdoor.com', password: 'password',phone_number: '1002003000',}
])

menu_itme = MenuItem.create([
    {name: 'French Fries', price: '3.39', restaurant_id: 1},
    {name: 'McChicken', price: '4.99', restaurant_id: 1},
    {name: '10 Piece McNuggets', price: '7.59', restaurant_id: 1},
    {name: '2 Cheesburger Meal', price: '10.99', restaurant_id: 1},
    {name: '10 Piece McNuggets Meal', price: '12.79', restaurant_id: 1},
    {name: 'Big Mac Meal', price: '12.29', restaurant_id: 1},
    {name: 'Chicken Quesadilla', price: '6.58', restaurant_id: 2},
    {name: 'Crunchwrap Supreme', price: '6.58', restaurant_id: 2},
    {name: '3 Doritos Locos Tacos Supreme', price: '13.41', restaurant_id: 2},
    {name: 'Nacho Cheese Doritos Locos Tacos', price: '3.53', restaurant_id: 2},
    {name: 'Oven-Roasted Turkey', price: '8.83', restaurant_id: 3},
    {name: 'Tuna', price: '8.83', restaurant_id: 3},
    {name: 'Sweet Onion Chicken Teriyaki', price: '9.90', restaurant_id: 3},
    {name: 'Coca-Cola Classic', price: '3.64', restaurant_id: 3},
    {name: 'Meatball Marinara', price: '8.48', restaurant_id: 3},

])