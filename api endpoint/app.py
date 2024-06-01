from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the model
with open('../model.pkl', 'rb') as file:
    model = pickle.load(file)

# Load the scaler
with open('../scaler.pkl', 'rb') as file:
    scaler = pickle.load(file)

# Define the GET route
@app.route('/', methods=['GET'])
def home():
    return "Welcome to the ML Model API. Use the /predict endpoint to get predictions."

# Define the POST route for predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the POST request
    data = request.get_json(force=True)
    
    # Assuming the data is in the correct format and extracted correctly
    features = np.array([data['features']])
    
    # Scale the features using the loaded scaler
    scaled_features = scaler.transform(features)
    
    # Make prediction
    prediction = model.predict(scaled_features)
    diagnosis = 'M' if prediction[0] == 1 else 'B'
    # Return the result as a JSON response
    print(diagnosis)
    return jsonify({'prediction': diagnosis})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
