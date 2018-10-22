5.times do
  name= Faker::HarryPotter.character
  location= Faker::HarryPotter.location
  bio="Ddefault bio"
  quotes=Faker::HarryPotter.quote
  password="$2a$11$lRLs./dG7FVA/krtdEz0ceFR0Dlo.SvwNjc3C4OXFZcDhOgvw8ysy"
  avatar=Faker::Avatar.image(name, '100x200', 'png', 'set4')
  User.create(email:"#{name}@gmail.com",name: name,password:password, location: location, bio: bio, quotes: quotes, avatar: avatar)
end
5.times do
  name= Faker::Friends.character
  location= Faker::Friends.location
  bio="Ddefault bio"
  quotes=Faker::Friends.quote
  password="$2a$11$lRLs./dG7FVA/krtdEz0ceFR0Dlo.SvwNjc3C4OXFZcDhOgvw8ysy"
  avatar=Faker::Avatar.image(name, '100x200', 'png', 'set4')
  User.create(email:"#{name}@gmail.com",name: name,password:password, location: location, bio: bio, quotes: quotes, avatar: avatar)
end

50.times do
  description = Faker::Lorem.paragraph 
  likes = rand(10..99)
   user_id = rand(1..User.all.count)
  Post.create(description: description, likes: likes, user_id: user_id)
end