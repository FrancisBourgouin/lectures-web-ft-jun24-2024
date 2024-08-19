# Blocks!

def repeat_something amount
  amount.times do
    yield
  end
end


def add_two_number a,b
  if a + b < 10
    "PFFFT SMALL SUM, USE YOUR BRAIN"
  end

  a + b
end


repeat_something(10) {puts add_two_number 5,3} 


# Picking 5 baskets of raspberries will yield 10 pots of jam