fib = {1: 1, 2: 1, 3: 2, 4: 3}  # This is a dict type.

# the first value in the "get" is the key of the dict element. if it is found then use the value in the dict. 
# if it is not found then use the second argument in the "get". Since the "7" key is not found, the value of 5 is used.
print(fib.get(4, 0) + fib.get(7, 5)) 

cars = ["Ford", "Volvo", "BMW"] # This is a list type.
nums = (1,2,3,4,5.0) # This is a tuple type.

print("var cars is a ", type(cars))
print("var fib is a ", type(fib))
print("var nums is a ", type(nums))

print("nums[0] is a ", type(nums[0]))
print("nums[5] is a ", type(nums[4]))

print("cars[0] is a ", type(cars[0]))