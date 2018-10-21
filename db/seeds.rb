# 10.times do
#   name= Faker::Friends.character
#   location= Faker::WorldCup.city
#   bio="Ddefault bio"
#   quotes=Faker::Friends.quote
#   avatar=Faker::Avatar.image(name, '100x200', 'png', 'set4')
#   User.create(email:"#{name}@gmail.com"name: name, location: location, bio: bio, quotes: quotes, avatar: avatar)
# end

# 10.times do
#   name= Faker::HowIMetYourMother.character
#   location= Faker::WorldCup.city
#   bio= Faker::HowIMetYourMother.catch_phrase
#   quotes=Faker::HowIMetYourMother.quote
#   avatar=Faker::Avatar.image(name, '100x200', 'png', 'set4')
#   Friend.create(name: name, location: location, bio: bio, quotes: quotes, avatar: avatar)
# end

# 30.times do
#   description = Faker::Lorem.paragraph 
#   likes = rand(10..99)
#    user_id = rand(1..2)
#   friend_id = rand(21..40)
#   Post.create(description: description, likes: likes, user_id: user_id, friend_id: friend_id)
# end