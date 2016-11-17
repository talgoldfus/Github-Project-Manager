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


tal =  User.create(username:"talgoldfus",password:"test",password_confirmation:"test")
tom =  User.create(username:'Tom@Tom.com',password:"test",password_confirmation:"test",profile_picture:'http')
tod =  User.create(username:'Tod@Tod.com',password:"test",password_confirmation:"test",profile_picture:'http')
james =  User.create(username:'James@James.com',password:"test",password_confirmation:"test" ,profile_picture:'http')
john =  User.create(username:'John@John.com',password:"test",password_confirmation:"test" ,profile_picture:'http')
kevin =  User.create(username:'Kevin@Kevin.com',password:"test",password_confirmation:"test" ,profile_picture:'http')


project1.project_managers =[tod.project_manager,kevin.project_manager]
project1.collaborators = [james.collaborator,tal.collaborator,john.collaborator]
project1.save

project2.project_managers =[tal.project_manager]
project2.collaborators = [tom.collaborator,kevin.collaborator]
project2.save

project3.project_managers =[tal.project_manager,james.project_manager]
project3.collaborators = [tom.collaborator,kevin.collaborator,john.collaborator,tod.collaborator]
project3.save

3.times do |index|
  3.times do |iteration|
    Task.create(priority:iteration+1 , project_id: index+1 ,title:"Task #{iteration} title",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",description:'Create Database Relations',status: "todo")
    Task.create(priority:iteration+1 , project_id: index+1 ,title:"Task #{iteration} title",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",description:'Create Model Methods',status: "inProgress")
    Task.create(priority:iteration+1 , project_id: index+1 ,title:"Task #{iteration} title",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",description:'Create banner',status: "inReview")
    Task.create(priority:iteration+1 , project_id: index+1 ,title:"Task #{iteration} title",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",description:'Create logo',status: "completed")
  end
end
