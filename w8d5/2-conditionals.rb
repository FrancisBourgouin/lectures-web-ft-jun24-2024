# == != && ||


puts 1.to_s == "1"




if 1 == 2
  puts "ITS THE SAME!"
elsif 1 == 1
  puts "Same!??!"
else 
  puts "NOT THE SAME!"
end



bob = {
  name:"Robert",
  role:"admin",
  admin?:false
}

# if bob[:role] == "admin"
if bob[:admin?]
  puts "Welcome back admin person" 
end


# unless array.includes(...)

# if !bob[:admin?]
unless bob[:admin?]
  puts "You're not authorized to access this data"
end


puts "You're not authorized to access this data" unless bob[:admin?]
puts "Welcome back admin person"  if bob[:admin?]


# if 0
#   puts "Falsy?"
# end

# <
# >
# ==

puts 1 <=> 1, "SAME"
puts 1 <=> 5, "LEFT SIDE SMALLER"
puts 5 <=> 1, "RIGHT SIDE SMALLER"