class User < ApplicationRecord
  has_many :user_tasks
  has_many :user_projects
  has_many :tasks , through: :user_tasks
  has_many :projects ,through: :user_projects
end
