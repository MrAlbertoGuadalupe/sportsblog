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
    password: '1234',
    password_confirmation: '1234'
  }
])

posts = Post.create([
 {
   user_id: 1,
   title: 'Brian Cashman confirms Domingo German has a fourth minor league option',
   body: 'In a pleasantly surprisingly bit of news, Brian Cashman confirmed to Brendan Kuty that righty Domingo German has a fourth minor league option. That means the Yankees will be able to send him to Triple-A this coming season without exposing him to waivers. (Cashman also confirmed Luis Cessa out of options, which we knew already.)

Long story short, players get three options once they’re added to the 40-man roster. That means they can be sent back and forth between MLB and the minors in three separate seasons with no issues. Once a player exhausts his three option years, he has to pass through waivers to go to the minors, which can create some roster headaches.

The eligibility rules for a fourth option year were complicated a few years ago but MLB has apparently simplified things. Here are the fourth option rules:

If a player misses an entire option year due to injury or expends his third option year before he has completed five professional seasons (Major Leagues and Minor Leagues included), he can receive a fourth option year.',
   img_url: 'http://cdn.riveraveblues.com/wp-content/uploads/2018/06/Domingo-German-min.jpg'
 }
])

comments = Comment.create!([
 {
   title: 'First Comment',
   body: 'This is the first comment',
   posts_id: 1,
   user_id: 1

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
