# EVERYTHING IS AN OBJECT

# Strings & ' vs " & #{}

name = 'Francis'
name = "Francis"



greeting = "Hello #{name}"

p greeting.reverse!
p greeting

p name[-24]

# Numbers

p 42.5
p 42.5.to_s



# String


# Array

some_array = [1,2,3,4,4,4,45]
some_array.shuffle!
some_other_array = [4,5]

what_question_mark = some_array - some_other_array

p some_array.empty?
p what_question_mark

list_of_cities_that_i_want_visit = []
list_of_cities_that_i_visited = []
remaining_cities = list_of_cities_that_i_want_visit - list_of_cities_that_i_visited

p remaining_cities

# Puts vs P

# console.log("Hello!")

# setTimeout(() => {
#   console.log("How are you?")
# }, 1000)

# console.log("I'm fine")

# puts "Hello!"

# sleep(2)

# puts "How are you?"