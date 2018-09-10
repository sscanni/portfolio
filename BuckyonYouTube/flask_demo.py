from flask import Flask

app = Flask(__name__)

# @ signifies a decorator - way to wrap a function and modifying its behavior
@app.route('/')
def index():
    return "<h1>Hi</h1><p>This is the homepage created by Python</p>"

@app.route('/profile/<username>')
def profile(username):
    return "Hey there %s" % username

@app.route('/post/<int:post_id>')
def post(post_id):
    return "Post ID is %s" % post_id

if __name__ == "__main__":
    app.run(debug=True)