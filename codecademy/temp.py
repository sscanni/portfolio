"""
color_list = ['red', 'white', 'blue', 'purple']

for c in color_list:
   print (c)

x = 0;
while (x < 5):
     print(x)
     x += 1

#triple single or double quotes allows multiple lines
x = b'''Python Tutorial,
Javascript Tutorial,
MySQL Tutorial'''
print(x)

#created from a iterable of ints, string, bytes or buffer objects.
x = bytes('Python, bytes', 'utf8')
print(x)
"""
# a = "STRING"
# i = 0
# while i < len(a):
#     c = a[i]
#     print(c)
#     i = i + 1

def search(char,str):
    L=len(str)
    print(L)
    i = 0
    while i < L:
        if str[i]== char:
            return i
        else:
            i = i + 1
    return -1

print(search("Y","PYTHON"))

# String formating
print ('{:05.2f}'.format(5.12345678123))
print ('{1} {0}'.format("Scanniello", "Steven"))

from datetime import datetime
print ('{:%Y-%m-%d %H:%M}'.format(datetime(2016, 7, 26, 3, 57)))

## Lists

my_list1 = [5, 12, 13, 14] # the list contains all integer values
print(my_list1)

my_list3 = ['red', 12, 112.12] # the list contains a string, an integer and a float values
print(my_list3)
