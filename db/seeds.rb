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

Long story short, players get three options once theyre added to the 40-man roster. That means they can be sent back and forth between MLB and the minors in three separate seasons with no issues. Once a player exhausts his three option years, he has to pass through waivers to go to the minors, which can create some roster headaches.

The eligibility rules for a fourth option year were complicated a few years ago but MLB has apparently simplified things. Here are the fourth option rules:

If a player misses an entire option year due to injury or expends his third option year before he has completed five professional seasons (Major Leagues and Minor Leagues included), he can receive a fourth option year.',
   img_url: 'http://cdn.riveraveblues.com/wp-content/uploads/2018/06/Domingo-German-min.jpg'
 },

   {
     user_id: 1,
     title: 'The Yankees reportedly still havent made an offer to Manny Machado',
     body: 'Arguably the biggest story of the Yankees’ offseason so far has been will they or won’t they sign Manny Machado. He is a polarizing figure, so naturally half of Yankees fans want him and the other half hope he ends up anywhere else. If you fall in the latter group and are tired of hearing the Machado updates, you may want to click out of this article.

Remember when we thought the top free agent would make his decision shortly after the New Year? Well, it’s been a week and a half and he still doesn’t appear close to signing. Jon Heyman offered an update yesterday afternoon that indicated that while the Yankees are “believed to be [Machado’s] preferred destination,” they haven’t made him an official offer. The Phillies and White Sox are still in the mix, along with a possible mystery team. Also of note: Machado is reportedly seeking a contract bigger than Giancarlo Stanton’s, which would be upwards of $325 million.',
     img_url: 'https://cdn.vox-cdn.com/thumbor/vPdDQZN7iyJfubiEADyZk2n40mQ=/0x0:4661x3107/1820x1213/filters:focal(1874x829:2618x1573):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62819638/1054059028.jpg.0.jpg'
   }
])

# comments = Comment.create!([
#  {
#    commenttitle: 'First Comment',
#    commentbody: 'This is the first comment',
#    post_id: 1,
#    user_id: 1,
#  }
#
#
# ])

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
