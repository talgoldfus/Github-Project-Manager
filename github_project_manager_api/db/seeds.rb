# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


project = Project.create(repo:'http', title:'New Reopo1')
user1 =  User.create(name:'Tal',username:'tal@tal' ,profile_picture:'http')
user2 =  User.create(name:'Tom',username:'Tom@Tom', profile_picture:'http')
user3 =  User.create(name:'Tod',username:'Tod@Tod' ,profile_picture:'http')
user4 =  User.create(name:'James',username:'James@James' ,profile_picture:'http')
user5 =  User.create(name:'John',username:'John@John' ,profile_picture:'http')
project.managers =[user5,user3]
project.users = [user1,user2,user4]
task1= Task.create(priority:0 , project_id: project ,status: "wip")
