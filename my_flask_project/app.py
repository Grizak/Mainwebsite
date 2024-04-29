from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

# Dictionary to store shared variables
shared_variables = {
    'variable1': 'initial_value',
    'variable2': 0
}

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def handle_connect():
    # Send initial data to client upon connection
    emit_data(shared_variables)

@socketio.on('change_variable')
def handle_change_variable(data):
    # Update shared variable
    shared_variables[data['variable']] = data['value']
    # Broadcast updated variable to all clients
    emit_data(shared_variables)

def emit_data(data):
    # Emit data to all connected clients
    socketio.emit('data', data)

if __name__ == '__main__':
    socketio.run(app, debug=True)
