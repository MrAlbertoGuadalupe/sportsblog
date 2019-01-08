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
   title: 'First Article',
   body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
 }
])

comments = Comment.create([
 {
   title: 'First Comment',
   body: 'This is the first comment'
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
