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
    { name: "Wendy's", image_url: "http://spencerheywood.com/images/dash_door/wendys-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/wendys-logo.avif"},
    { name: 'Popeyes', image_url: "http://spencerheywood.com/images/dash_door/popeyes-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/popeyes-logo.avif"},
    { name: "Dunkin'", image_url: "http://spencerheywood.com/images/dash_door/dunkin-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/dunkin-logo.avif"},
    { name: 'Papa Johns', image_url: "http://spencerheywood.com/images/dash_door/papa-johns-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/papa-johns-logo.avif"},
    { name: 'Pizza Hut', image_url: "http://spencerheywood.com/images/dash_door/pizza-hut-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/pizza-hut-logo.avif"},
    { name: 'Cheesecake Factory', image_url: "http://spencerheywood.com/images/dash_door/the-cheesecake-factory-banner.avif", icon_image_url: "http://spencerheywood.com/images/dash_door/the-cheesecake-factory-logo.avif"},
])

# restaurant[0].photo.attached(io: URI.open("https://dash-door-seeds.s3.amazonaws.com/new_landing_page.webp"), filename: "new_landing_page.webp")
puts "Creating demo user"

user = User.create([
    { first_name: 'Demo', last_name: 'User', email: 'demo@dashdoor.com', password: 'password',phone_number: '1002003000'},
    { first_name: 'Joe', last_name: 'Burrows', email: 'joe@dashdoor.com', password: 'password',phone_number: '1002003001'},
    { first_name: 'Demi', last_name: 'Levato', email: 'demi@dashdoor.com', password: 'password',phone_number: '1002003002'},
    { first_name: 'Bob', last_name: 'Saget', email: 'bob@dashdoor.com', password: 'password',phone_number: '1002003003'},
    { first_name: 'Mary', last_name: 'Jane', email: 'mary@dashdoor.com', password: 'password',phone_number: '1002003004'},
    { first_name: 'Donald', last_name: 'Trump', email: 'donald@dashdoor.com', password: 'password',phone_number: '1002003005'}
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
    {name: '2 Chicken Chalupas Supreme Combo', price: '14.63', restaurant_id: 2, image_url: "http://spencerheywood.com/images/dash_door/taco-bell-2-chicken-chalupas-supreme-combo.avif"},
    {name: 'Nachos BellGrande', price: '7.19', restaurant_id: 2, image_url: "http://spencerheywood.com/images/dash_door/taco-bell-nachos-bellgrande.avif"},
    {name: '3 Doritos Locos Tacos Supreme', price: '13.41', restaurant_id: 2, image_url: "http://spencerheywood.com/images/dash_door/taco-bell-3-doritos-locos-tacos-supreme.avif"},
    {name: 'Nacho Cheese Doritos Locos Tacos', price: '3.53', restaurant_id: 2, image_url: "http://spencerheywood.com/images/dash_door/taco-bell-nach-cheese-doritos-locos-tacos.avif"},
    
    {name: 'Oven-Roasted Turkey', price: '8.83', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-oven-roasted-turkey.avif"},
    {name: 'Tuna', price: '8.83', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-tuna.avif"},
    {name: 'Sweet Onion Chicken Teriyaki', price: '9.90', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-sweet-onion-chicken-teriyaki.avif"},
    {name: 'Coca-Cola Classic', price: '3.64', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-coca-cola-classic.avif"},
    {name: 'Meatball Marinara', price: '8.48', restaurant_id: 3, image_url: "http://spencerheywood.com/images/dash_door/subway-meatball-marinara.avif"},

    {name: '10 PC. Crispy Chicken Nuggets', price: '5.49', restaurant_id: 4, image_url: "http://spencerheywood.com/images/dash_door/wendys-10pc-crispy-chicken-nuggets.avif"},
    {name: '6 PC. Crispy Chicken Nuggets', price: '3.36', restaurant_id: 4, image_url: "http://spencerheywood.com/images/dash_door/wendys-6pc-crispy-chicken-nuggets.avif"},
    {name: '10 PC. Spicy Chicken Nuggets', price: '5.49', restaurant_id: 4, image_url: "http://spencerheywood.com/images/dash_door/wendys-10pc-spicy-chicken-nuggets.avif"},
    {name: 'Baconator Combo', price: '12.11', restaurant_id: 4, image_url: "http://spencerheywood.com/images/dash_door/wendys-baconator-combo.avif"},
    {name: '10 PC. Nuggets Combo', price: '12.11', restaurant_id: 4, image_url: "http://spencerheywood.com/images/dash_door/wendys-10pc-nuggets-combo.avif"},
    {name: 'Jr. Bacon Cheeseburger', price: '3.74', restaurant_id: 4, image_url: "http://spencerheywood.com/images/dash_door/wendy-jr-bacon-cheeseburger.avif"},
    {name: 'Spicy Chicken Sandwich Combo', price: '13.11', restaurant_id: 4, image_url: "http://spencerheywood.com/images/dash_door/wendys-spicy-chicken-sandwich-combo.avif"},
   
    {name: 'Cajun Fries', price: '4.95', restaurant_id: 5, image_url: "http://spencerheywood.com/images/dash_door/popeyes-cajun-fries.avif"},
    {name: '5Pc Handcrafted Tenders Combo', price: '18.94', restaurant_id: 5, image_url: "http://spencerheywood.com/images/dash_door/popeyes-5pc-handcrafted-tenders-combo.avif"},
    {name: '4Pc Signature Chicken Combo', price: '18.79', restaurant_id: 5, image_url: "http://spencerheywood.com/images/dash_door/popeyes-4pc-signature-chicken-combo.avif"},
    {name: 'Homestyle Mac & Cheese', price: '5.09', restaurant_id: 5, image_url: "http://spencerheywood.com/images/dash_door/popeyes-homestyle-mac-and-cheese.avif"},
    {name: 'Spicy Chicken Sandwich', price: '5.99', restaurant_id: 5, image_url: "http://spencerheywood.com/images/dash_door/popeyes-spicy-chicken-sandwich.avif"},

    {name: 'Bacon Egg And Cheese', price: '4.73', restaurant_id: 6, image_url: "http://spencerheywood.com/images/dash_door/dunkin-bacon-egg-and-cheese.avif"},
    {name: 'Bagel With Cream Cheese Spread', price: '6.86', restaurant_id: 6, image_url: "http://spencerheywood.com/images/dash_door/dunkin-bagel-with-cream-cheese-spread.avif"},
    {name: 'Half Dozen Donuts', price: '12.48', restaurant_id: 6, image_url: "http://spencerheywood.com/images/dash_door/dunkin-half-dozen-donuts.avif"},
    {name: 'Original Blend Iced Coffee', price: '4.36', restaurant_id: 6, image_url: "http://spencerheywood.com/images/dash_door/dunkin-original-blend-iced-coffee.avif"},
    {name: 'Original Blend', price: '2.98', restaurant_id: 6, image_url: "http://spencerheywood.com/images/dash_door/dunkin-original-blend.avif"},
    {name: 'Sausage Egg And Cheese', price: '6.86', restaurant_id: 6, image_url: "http://spencerheywood.com/images/dash_door/dunkin-sausage-egg-and-cheese.avif"},

    {name: 'Buffalo Wings', price: '8.49', restaurant_id: 7, image_url: "http://spencerheywood.com/images/dash_door/papa-johns-buffalo-wings.avif"},
    {name: 'Cheese Pizza', price: '11.00', restaurant_id: 7, image_url: "http://spencerheywood.com/images/dash_door/papa-johns-cheese-pizza.avif"},
    {name: 'Garden Fresh Pizza', price: '13.99', restaurant_id: 7, image_url: "http://spencerheywood.com/images/dash_door/papa-johns-garden-fresh-pizza.avif"},
    {name: 'Pepperoni Pizza', price: '11.00', restaurant_id: 7, image_url: "http://spencerheywood.com/images/dash_door/papa-johns-pepperoni-pizza.avif"},
    {name: 'Pepsi', price: '2.49', restaurant_id: 7, image_url: "http://spencerheywood.com/images/dash_door/papa-johns-pepsi.avif"},
    {name: 'Super Hawaiian Pizza', price: '13.99', restaurant_id: 6, image_url: "http://spencerheywood.com/images/dash_door/papa-johns-super-hawaiian-pizza.avif"},
    {name: 'The Meats Pizza', price: '13.99', restaurant_id: 6, image_url: "http://spencerheywood.com/images/dash_door/papa-johns-the-meats-pizza.avif"},
    
    {name: '6" Personal Pan Pizza', price: '5.64', restaurant_id: 8, image_url: "http://spencerheywood.com/images/dash_door/pizza-hut-6\"-personal-pan-pizza.avif"},
    {name: '8 Boneless Wings', price: '10.97', restaurant_id: 8, image_url: "http://spencerheywood.com/images/dash_door/pizza-hut-8-boneless-wings.avif"},
    {name: '12" Medium Pizza', price: '15.24', restaurant_id: 8, image_url: "http://spencerheywood.com/images/dash_door/pizza-hut-12\"-medium-pizza.avif"},
    {name: '14" Large Pizza', price: '17.92', restaurant_id: 8, image_url: "http://spencerheywood.com/images/dash_door/pizza-hut-14\"-large-pizza.avif"},
    {name: 'Breadsticks', price: '8.16', restaurant_id: 8, image_url: "http://spencerheywood.com/images/dash_door/pizza-hut-breadsticks.avif"},
    
    {name: 'Cheeseburger Spring Rolls', price: '12.95', restaurant_id: 9, image_url: "http://spencerheywood.com/images/dash_door/the-cheesecake-factory-cheeseburger-spring-rolls.avif"},
    {name: 'Chocolate Tower Truffle Cake', price: '11.50', restaurant_id: 9, image_url: "http://spencerheywood.com/images/dash_door/the-cheesecake-factory-chocolate-tower-truffle-cake.avif"},
    {name: 'Fresh Strawberry Cheesecake', price: '12.50', restaurant_id: 9, image_url: "http://spencerheywood.com/images/dash_door/the-cheesecake-factory-fresh-strawberry-cheesecake.avif"},
    {name: 'Godiva Chocolate Cheesecake', price: '11.50', restaurant_id: 9, image_url: "http://spencerheywood.com/images/dash_door/the-cheesecake-factory-godiva-chocolate-cheesecake.avif"},
    {name: 'Oreo Dream Extreme Cheesecake', price: '11.50', restaurant_id: 9, image_url: "http://spencerheywood.com/images/dash_door/the-cheesecake-factory-oreo-dream-extreme-cheesecake.avif"},
    
])

puts "Creating reviews"

review = Review.create([
    {user_id: 4, restaurant_id: 1, score: 1, body: "Extremely disappointed with my last visit to McDonald's. The service was painfully slow, and my order was incorrect. The fries were cold and soggy, and the burger was overcooked. Definitely not the quality I expected."},
    {user_id: 3, restaurant_id: 1, score: 1, body: "Absolutely the worst McDonald's I've been to. The order took forever, and when it finally arrived, it was completely wrong. The burger was cold, and the staff seemed not to care at all about the mistake. Will not be returning."},
    {user_id: 2, restaurant_id: 1, score: 1, body: "This McDonald's visit was a letdown. The place was messy, the restroom was dirty, and there was a strong smell of stale oil. The food tasted as bad as the restaurant looked. Such a poor representation of the brand."},
    {user_id: 5, restaurant_id: 1, score: 1, body: "I'm appalled by the service at this McDonald's. The staff was rude, and the wait time was absurd for fast food. My coffee was spilled in the bag, and the fries were stale. It's a total failure in service and quality."},
    {user_id: 6, restaurant_id: 1, score: 2, body: "This McDonald's was somewhat disappointing. The staff were not very welcoming, and the food quality was mediocre at best. The only saving grace was the relatively clean seating area, but overall, not a great experience."},
    {user_id: 3, restaurant_id: 1, score: 2, body: "The service at this McDonald's was slow, and the food was barely warm. The drive-thru speaker was also malfunctioning, which added to the frustration. It's not the worst, but there's a lot of room for improvement."},
    
    {user_id: 2, restaurant_id: 2, score: 2, body: "This food is dece"},
    {user_id: 4, restaurant_id: 2, score: 3, body: "This food is good"},
    {user_id: 5, restaurant_id: 2, score: 4, body: "This food is way good"},
    {user_id: 6, restaurant_id: 2, score: 5, body: "This food is so good"},

    {user_id: 2, restaurant_id: 3, score: 1, body: "This food is gross"},
    {user_id: 3, restaurant_id: 3, score: 3, body: "This fo and tasty"},
    {user_id: 4, restaurant_id: 3, score: 3, body: "This food is good and tasty"},
    {user_id: 6, restaurant_id: 3, score: 4, body: "This food good and tasty"},
    {user_id: 5, restaurant_id: 3, score: 5, body: "This food is good and tasty"},
   
    {user_id: 3, restaurant_id: 4, score: 1, body: "This food is good and tasty"},
    {user_id: 2, restaurant_id: 4, score: 2, body: "This food is gd and tasty"},
    {user_id: 4, restaurant_id: 4, score: 4, body: "This food is good and tasty"},
    {user_id: 5, restaurant_id: 4, score: 4, body: "This food is good and tasty"},
    {user_id: 6, restaurant_id: 4, score: 5, body: "This food i and tasty"},
   
    {user_id: 2, restaurant_id: 5, score: 5, body: "Tis food is good and tasty"},
    {user_id: 3, restaurant_id: 5, score: 4, body: "This food is good an tasty"},
    {user_id: 4, restaurant_id: 5, score: 5, body: "This food is and tasty"},
    {user_id: 5, restaurant_id: 5, score: 5, body: "This food is good tasty"},
    {user_id: 6, restaurant_id: 5, score: 5, body: "This food is goodand tasty"},

    {user_id: 4, restaurant_id: 6, score: 1, body: "Extremely disappointed with my last visit to McDonald's. The service was painfully slow, and my order was incorrect. The fries were cold and soggy, and the burger was overcooked. Definitely not the quality I expected."},
    {user_id: 3, restaurant_id: 6, score: 1, body: "Absolutely the worst McDonald's I've been to. The order took forever, and when it finally arrived, it was completely wrong. The burger was cold, and the staff seemed not to care at all about the mistake. Will not be returning."},
    {user_id: 2, restaurant_id: 6, score: 1, body: "This McDonald's visit was a letdown. The place was messy, the restroom was dirty, and there was a strong smell of stale oil. The food tasted as bad as the restaurant looked. Such a poor representation of the brand."},
    {user_id: 5, restaurant_id: 6, score: 1, body: "I'm appalled by the service at this McDonald's. The staff was rude, and the wait time was absurd for fast food. My coffee was spilled in the bag, and the fries were stale. It's a total failure in service and quality."},
    {user_id: 6, restaurant_id: 6, score: 2, body: "This McDonald's was somewhat disappointing. The staff were not very welcoming, and the food quality was mediocre at best. The only saving grace was the relatively clean seating area, but overall, not a great experience."},
    {user_id: 3, restaurant_id: 6, score: 2, body: "The service at this McDonald's was slow, and the food was barely warm. The drive-thru speaker was also malfunctioning, which added to the frustration. It's not the worst, but there's a lot of room for improvement."},
    
    {user_id: 4, restaurant_id: 7, score: 1, body: "Extremely disappointed with my last visit to McDonald's. The service was painfully slow, and my order was incorrect. The fries were cold and soggy, and the burger was overcooked. Definitely not the quality I expected."},
    {user_id: 3, restaurant_id: 7, score: 1, body: "Absolutely the worst McDonald's I've been to. The order took forever, and when it finally arrived, it was completely wrong. The burger was cold, and the staff seemed not to care at all about the mistake. Will not be returning."},
    {user_id: 2, restaurant_id: 7, score: 1, body: "This McDonald's visit was a letdown. The place was messy, the restroom was dirty, and there was a strong smell of stale oil. The food tasted as bad as the restaurant looked. Such a poor representation of the brand."},
    {user_id: 5, restaurant_id: 7, score: 1, body: "I'm appalled by the service at this McDonald's. The staff was rude, and the wait time was absurd for fast food. My coffee was spilled in the bag, and the fries were stale. It's a total failure in service and quality."},
    {user_id: 6, restaurant_id: 7, score: 2, body: "This McDonald's was somewhat disappointing. The staff were not very welcoming, and the food quality was mediocre at best. The only saving grace was the relatively clean seating area, but overall, not a great experience."},
    {user_id: 3, restaurant_id: 7, score: 2, body: "The service at this McDonald's was slow, and the food was barely warm. The drive-thru speaker was also malfunctioning, which added to the frustration. It's not the worst, but there's a lot of room for improvement."},
    
    {user_id: 4, restaurant_id: 8, score: 1, body: "Extremely disappointed with my last visit to McDonald's. The service was painfully slow, and my order was incorrect. The fries were cold and soggy, and the burger was overcooked. Definitely not the quality I expected."},
    {user_id: 3, restaurant_id: 8, score: 1, body: "Absolutely the worst McDonald's I've been to. The order took forever, and when it finally arrived, it was completely wrong. The burger was cold, and the staff seemed not to care at all about the mistake. Will not be returning."},
    {user_id: 2, restaurant_id: 8, score: 1, body: "This McDonald's visit was a letdown. The place was messy, the restroom was dirty, and there was a strong smell of stale oil. The food tasted as bad as the restaurant looked. Such a poor representation of the brand."},
    {user_id: 5, restaurant_id: 8, score: 1, body: "I'm appalled by the service at this McDonald's. The staff was rude, and the wait time was absurd for fast food. My coffee was spilled in the bag, and the fries were stale. It's a total failure in service and quality."},
    {user_id: 6, restaurant_id: 8, score: 2, body: "This McDonald's was somewhat disappointing. The staff were not very welcoming, and the food quality was mediocre at best. The only saving grace was the relatively clean seating area, but overall, not a great experience."},
    {user_id: 3, restaurant_id: 8, score: 2, body: "The service at this McDonald's was slow, and the food was barely warm. The drive-thru speaker was also malfunctioning, which added to the frustration. It's not the worst, but there's a lot of room for improvement."},
    
    {user_id: 4, restaurant_id: 9, score: 1, body: "Extremely disappointed with my last visit to McDonald's. The service was painfully slow, and my order was incorrect. The fries were cold and soggy, and the burger was overcooked. Definitely not the quality I expected."},
    {user_id: 3, restaurant_id: 9, score: 1, body: "Absolutely the worst McDonald's I've been to. The order took forever, and when it finally arrived, it was completely wrong. The burger was cold, and the staff seemed not to care at all about the mistake. Will not be returning."},
    {user_id: 2, restaurant_id: 9, score: 1, body: "This McDonald's visit was a letdown. The place was messy, the restroom was dirty, and there was a strong smell of stale oil. The food tasted as bad as the restaurant looked. Such a poor representation of the brand."},
    {user_id: 5, restaurant_id: 9, score: 1, body: "I'm appalled by the service at this McDonald's. The staff was rude, and the wait time was absurd for fast food. My coffee was spilled in the bag, and the fries were stale. It's a total failure in service and quality."},
    {user_id: 6, restaurant_id: 9, score: 2, body: "This McDonald's was somewhat disappointing. The staff were not very welcoming, and the food quality was mediocre at best. The only saving grace was the relatively clean seating area, but overall, not a great experience."},
    {user_id: 3, restaurant_id: 9, score: 2, body: "The service at this McDonald's was slow, and the food was barely warm. The drive-thru speaker was also malfunctioning, which added to the frustration. It's not the worst, but there's a lot of room for improvement."},
    
])

puts "Done!"