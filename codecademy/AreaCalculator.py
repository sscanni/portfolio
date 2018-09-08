"""
This is a program that will calc area
Note: codecademy was using raw_input but getting error with when running here.
Apparently Python 3.x, uses input() and Python 2.x, uses raw_input()
"""

pi = 3.14159
print ("++++++++++ app is running ++++++++++")
print ("What shape should we calculate? ")
option = input("Enter C for Circle or T for Triangle: ")
if (option.upper() == 'C'):
    radius = float(input("Enter the radius: "))
    area = pi * (radius**2)
    print ("The area of a circle with radius %s is %s" % (radius, area))
elif (option.upper() == 'T'):
      base = float(input("Enter the base of the triangle: "))
      height = float(input("Enter the height of the triangle: "))
      area = .50 * base * height
      print ("The area of a triangle with base %s and height %s is %s" % (base, height, area))
else:
     print("An invalid shape was entered.")
    
print ("Program is exiting")