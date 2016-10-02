# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


project1 = Project.create(repo:'http://', title:'Fizzbuzz')
project2 = Project.create(repo:'http://', title:'FeedMe')
project3 = Project.create(repo:'http://', title:'Artist Base')


tal =  User.create(name:'Tal',username:'tal@tal.com' ,profile_picture:'http')
tom =  User.create(name:'Tom',username:'Tom@Tom.com', profile_picture:'http')
tod =  User.create(name:'Tod',username:'Tod@Tod.com' ,profile_picture:'http')
james =  User.create(name:'James',username:'James@James.com' ,profile_picture:'http')
john =  User.create(name:'John',username:'John@John.com' ,profile_picture:'http')
kevin =  User.create(name:'Kevin',username:'Kevin@Kevin.com' ,profile_picture:'http')

project1.managers =[tod,kevin]
project1.users = [james,tal,john]

project2.managers =[tal]
project2.users = [tom,kevin]

project3.managers =[tal,james]
project3.users = [tom,kevin,john,tod]

3.times do |i|
  Task.create(priority:1 , project_id: i+1 ,content:'Create Database Relations',status: "pending")
  Task.create(priority:2 , project_id: i+1 ,content:'Create Model Methods',status: "pending")
  Task.create(priority:5 , project_id: i+1 ,content:'Create logo',status: "pending")
end
