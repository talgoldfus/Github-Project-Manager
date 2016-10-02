class Project < ApplicationRecord
  has_many :user_projects
  has_many :manager_projects
  has_many :users ,through: :user_projects
  has_many :managers ,through: :manager_projects
  has_many :tasks

end
