# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
User.destroy_all
Comment.destroy_all

 users = User.create([
  {
    email: 'a@a.co',
    password: '1234'
  }
])

posts = Post.create([
 {
   title: 'posttest',
   body: 'heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey'
 }
])

comments = Comment.create([
 {
   title: 'commenttest',
   body: 'heyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyheyhey'
 }
])

#  users.each do |user|
#   3.times do
#     user.posts.create(title: Faker::Company.buzzword, body: Faker::Company.bs)
#   end
# end

# comments.each do |comments|
#  3.times do
#    comments.posts.create(title: Faker::Company.buzzword, body: Faker::Company.bs)
#  end
# end
 #puts "#{Post.count} posts and #{User.count} user  in database "
# and #{Comment.count} comments
