import mysql.connector
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def display():
    mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="admin",
    database="infotech"
    )

    print("MySQL Connection Open = %s" % mydb)

    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM courses order by seq")
    myresult = mycursor.fetchall()
    
    return render_template("display.html", myresult=myresult)

if __name__ == "__main__":
    app.run(debug=True)