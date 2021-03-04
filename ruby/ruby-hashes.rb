# Ruby Hashes 3/4/2021

# Hashes - kinda like arrays and objects combined

# => hash rocket

# Two ways to create a hash
# 1: Key value pairs inside curlies
learn_staff = {instructor: 'Mina', career_services: 'Bryan', admin: 'Lisa'}

p learn_staff
# Output --> {:instructor=>"Mina", :career_services=>"Bryan", :admin=>"Lisa"}
# Both ways are valid Ruby syntax, the output is older syntax

# 2: Creating a new instance of class Hash
test_hash = Hash.new
p test_hash
# Output --> {}

# Four actions programmers want to do - 1) read, 2) create, 3) update, 4) delete
# CRUD

# READ - return information
# Entire hash
p learn_staff
# Individual values
p learn_staff[:admin]

# CREATE - add new content
learn_staff[:boss_lady] = 'Chelsea'
p learn_staff

learn_staff[:enrollment] = 'Kumba'
p learn_staff

# UPDATE - change existing data
learn_staff[:marketing] = 'TJ'

# Values can be any valid data type
learn_staff[:instructor] = ['Mina C', 'Sarah', 'Sarah', 'Sarah']
p learn_staff
p learn_staff[:instructor][1]
learn_staff[:instructor].each do |value|
  p value
end

# DELETE
learn_staff.delete(:career_services)
learn_staff.delete :admin
p learn_staff

# Modules - groupings of like things with similar properties
# Enumerable - iterable module that contains arrays, hashes, ranges
# Duck typing - look at the behavior of a method more than the data type

learn_staff.each do |key, value|
  p "#{value}'s job is #{key}"
end

def my_coworkers hash
  hash.map do |key, value|
    "My coworker is #{value}."
  end
end
p my_coworkers learn_staff
