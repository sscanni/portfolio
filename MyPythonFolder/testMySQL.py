import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="admin",
  database="infotech"
)

print("MySQL Connection Open = %s" % mydb)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM courses")

# mycursor.execute("SELECT subject_id, subject FROM courses")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)

for x in myresult:
  print(x[0], "  ", x[1])