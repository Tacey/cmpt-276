json.extract! course, :id, :course, :description, :created_at, :updated_at
json.url course_url(course, format: :json)
