from flask import Flask
app=Flask(__name__)

@app.route('/')
def hello():
    return "Hello I am C J Sakshi"
if __name__ == '__main__':
    app.run(debug=True)