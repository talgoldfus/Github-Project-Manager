class ManagerProject < ApplicationRecord
  belongs_to :manager, :class_name => "User"
  belongs_to :project

end
