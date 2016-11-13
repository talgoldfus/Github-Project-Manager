class Projects::IndexSerializer < ProjectSerializer
  has_many :users
  has_many :managers
  has_many :tasks

end
