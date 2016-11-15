class CollaboratorProject < ApplicationRecord
  belongs_to :project
  belongs_to :collaborator
end
