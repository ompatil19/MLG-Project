"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Home() {
  const [formData, setFormData] = useState({
    radius_mean: '',
    texture_mean: '',
    perimeter_mean: '',
    area_mean: '',
    smoothness_mean: '',
    compactness_mean: '',
    concavity_mean: '',
    concave_points_mean: '',
    symmetry_mean: '',
    fractal_dimension_mean: '',
    radius_se: '0',
    texture_se: '0',
    perimeter_se: '0',
    area_se: '0',
    smoothness_se: '0',
    compactness_se: '0',
    concavity_se: '0',
    concave_points_se: '0',
    symmetry_se: '0',
    fractal_dimension_se: '0',
    radius_worst: '',
    texture_worst: '',
    perimeter_worst: '',
    area_worst: '',
    smoothness_worst: '',
    compactness_worst: '',
    concavity_worst: '',
    concave_points_worst: '',
    symmetry_worst: '0',
    fractal_dimension_worst: '0'
  });

  // Handle input change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [data, setData] = useState("TBA");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log(formData);
    console.log(typeof(formData));
    // Convert formData values to numbers and handle potential NaN values
    const featuresArray = Object.values(formData).map(value => {
      const numberValue = Number(value);
      return isNaN(numberValue) ? 0 : numberValue;
    });

    console.log(featuresArray);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        features: featuresArray
      });
      setData(response.data.prediction);
    } catch (err: any) {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.error('Response error:', err.response.data);
        setError(err.response.data);
      } else if (err.request) {
        // Request was made but no response received
        console.error('Request error:', err.request);
        setError(err.request);
      } else {
        // Something else caused the error
        console.error('Error:', err.message);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="main h-screen flex flex-row items-center justify-between">
        <div className="left w-1/2 flex flex-col">
          <h1 className="self-center text-4xl my-4">Input Parameters</h1>
          <div className="flex flex-row justify-around">
            <div className="column">
              <div className="in my-2">
                <span className="mx-2">radius_mean</span>
                <input
                  type="text"
                  name="radius_mean"
                  id="radius_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.radius_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">texture_mean</span>
                <input
                  type="text"
                  name="texture_mean"
                  id="texture_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.texture_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">perimeter_mean</span>
                <input
                  type="text"
                  name="perimeter_mean"
                  id="perimeter_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.perimeter_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">area_mean</span>
                <input
                  type="text"
                  name="area_mean"
                  id="area_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.area_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">smoothness_mean</span>
                <input
                  type="text"
                  name="smoothness_mean"
                  id="smoothness_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.smoothness_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">compactness_mean</span>
                <input
                  type="text"
                  name="compactness_mean"
                  id="compactness_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.compactness_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">concavity_mean</span>
                <input
                  type="text"
                  name="concavity_mean"
                  id="concavity_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.concavity_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">concave_points_mean</span>
                <input
                  type="text"
                  name="concave_points_mean"
                  id="concave_points_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.concave_points_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">symmetry_mean</span>
                <input
                  type="text"
                  name="symmetry_mean"
                  id="symmetry_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.symmetry_mean}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="column">
              <div className="in my-2">
                <span className="mx-2">fractal_dimension_mean</span>
                <input
                  type="text"
                  name="fractal_dimension_mean"
                  id="fractal_dimension_mean"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.fractal_dimension_mean}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">radius_worst</span>
                <input
                  type="text"
                  name="radius_worst"
                  id="radius_worst"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.radius_worst}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">texture_worst</span>
                <input
                  type="text"
                  name="texture_worst"
                  id="texture_worst"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.texture_worst}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">perimeter_worst</span>
                <input
                  type="text"
                  name="perimeter_worst"
                  id="perimeter_worst"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.perimeter_worst}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">area_worst</span>
                <input
                  type="text"
                  name="area_worst"
                  id="area_worst"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.area_worst}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">smoothness_worst</span>
                <input
                  type="text"
                  name="smoothness_worst"
                  id="smoothness_worst"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.smoothness_worst}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">compactness_worst</span>
                <input
                  type="text"
                  name="compactness_worst"
                  id="compactness_worst"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.compactness_worst}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">concavity_worst</span>
                <input
                  type="text"
                  name="concavity_worst"
                  id="concavity_worst"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.concavity_worst}
                  onChange={handleChange}
                />
              </div>
              <div className="in my-2">
                <span className="mx-2">concave_points_worst</span>
                <input
                  type="text"
                  name="concave_points_worst"
                  id="concave_points_worst"
                  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-gray-800"
                  value={formData.concave_points_worst}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded w-1/2 self-center"
          >
            Submit
          </button>
        </div>

        <div className="right w-2/5 flex flex-col items-center h-3/5 justify-around">
          <div>
            <h2 className="self-center text-5xl my-2 ">Breast</h2>
            <h2 className="self-center text-5xl my-2 ">Cancer</h2>
            <h2 className="self-center text-5xl my-2 ">Detection</h2>
          </div>
          <div className='text-2xl'>
            <span >Result: </span>
            {loading && <span>Loading...</span>}
            {error && <span>Error: {error}</span>}
            {data && (
              <span className="rounded">
                {JSON.stringify(data, null, 2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
