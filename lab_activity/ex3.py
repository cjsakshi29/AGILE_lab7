from flask import Flask, request

app = Flask(__name__)

# Root route
@app.route("/")
def index():
    return "Index!"

# Simple hello route
@app.route("/hello")
def hello():
    return "Hello World!"

# Members route
@app.route("/members")
def members():
    return "Members"

# Dynamic route to get a member's name
@app.route("/members/<string:name>/")
def getMember(name):
    return name

# Route with query parameters
@app.route('/query_example')
def query_example():
    language = request.args.get('language')
    return '''<h1>The Language is: {}</h1>'''.format(language)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
