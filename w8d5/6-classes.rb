# What's a class ?

# A group of students
# A blueprint 


# User => name, admin_status, greet, farewell


class User 
  def initialize name, role
    @name = role == "admin" ? "MEGA BOSS #{name}" : name
    @role = role
  end

  attr_accessor :name

  attr_reader :role

  def role?
    @role && !@role.empty?
  end

  def greet
    puts "Hi! My name is #{@name}"
  end


end


john = User.new("John Connor", "admin")
jane = User.new("Jane Doe", nil)

# john is an instance of the user class

p john.name
john.name = "Johnny"
p john.name
p jane.role?


jane.greet