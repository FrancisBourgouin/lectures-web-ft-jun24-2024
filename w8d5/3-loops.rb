list_of_potatoes = ["Yukon Gold","Irish Cobbler","Fingerling"]

some_user = {
  name:"Little Chicken",
  type:"Chicken",
  password:"1234"
}


# each 

list_of_potatoes.each do |potato|
  puts "Potato is : #{potato}"
end

some_user.each do |user|
  p user
end


# each_with

list_of_potatoes.each_with_index do |potato, index|
  puts "Potato #{potato} at position #{index}"
end

# for 

for something in list_of_potatoes do
  p something # something is the value of each element
end

for something in some_user do
  p something
end




# .times

10.times do |number|
  puts "YOOOO, #{number}" if number < 5
  puts "YAAAA" unless number < 5
end



# .upto

10.upto(20) do |number|
  p number
end

20.downto(10) do |number|
  p number
end

