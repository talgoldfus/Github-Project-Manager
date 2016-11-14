# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


project1 = Project.create(repo_id:nil, title:'Fizzbuzz')
project2 = Project.create(repo_id:nil, title:'FeedMe')
project3 = Project.create(repo_id:nil, title:'Artist Base' ,public:false)


tal =  User.create(username:"Tal@Tal.com",password:"test",password_confirmation:"test")
tom =  User.create(username:'Tom@Tom.com',password:"test",password_confirmation:"test",profile_picture:'http')
tod =  User.create(username:'Tod@Tod.com',password:"test",password_confirmation:"test",profile_picture:'http')
james =  User.create(username:'James@James.com',password:"test",password_confirmation:"test" ,profile_picture:'http')
john =  User.create(username:'John@John.com',password:"test",password_confirmation:"test" ,profile_picture:'http')
kevin =  User.create(username:'Kevin@Kevin.com',password:"test",password_confirmation:"test" ,profile_picture:'http')

project1.managers =[tod,kevin]
project1.users = [james,tal,john]

project2.managers =[tal]
project2.users = [tom,kevin]

project3.managers =[tal,james]
project3.users = [tom,kevin,john,tod]

3.times do |i|
  Task.create(priority:1 , project_id: i+1 ,title:'title 1' ,description:'Create Database Relations',status: "open")
  Task.create(priority:2 , project_id: i+1 ,title:'title 2' ,description:'Create Model Methods',status: "open")
  Task.create(priority:5 , project_id: i+1 ,title:'title 3' ,description:'Create logo',status: "open")
end
