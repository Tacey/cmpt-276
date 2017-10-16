class Enroll < ActiveRecord::Base
  belongs_to :Course
  belongs_to :Student
end
