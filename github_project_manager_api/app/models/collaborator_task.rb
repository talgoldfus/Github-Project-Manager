class CollaboratorTask < ApplicationRecord
  belongs_to :task
  belongs_to :collaborator
end
