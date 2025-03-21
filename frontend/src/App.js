import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Update import for Routes
import './App.css'; // Make sure you have a CSS file for styling

function App() {
    const [data, setData] = useState(null);

    // Fetch data from the backend when the component mounts
    useEffect(() => {
        fetch('http://backend:5000/your-api-endpoint')
            .then(response => response.json())
            .then(data => setData(data))  // Update state with the fetched data
            .catch(error => console.log('Error fetching data: ', error));
    }, []);  // Empty array means this runs only once, when the component mounts

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="login-container">
                        <div className="avatar">
                            {/* You can replace this with an image or an icon */}
                            <span className="avatar-initial">T</span>
                        </div>
                        <span className="sign-in-text">Sign-In</span>
                    </div>
                </header>

                <Routes>
                    {/* Define your routes here */}
                    {/* Example route */}
                    <Route path="/" element={<Home data={data} />} />
                    {/* You can define more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

// Example of the Home component to display the fetched data
function Home({ data }) {
    return (
        <div>
            <h1>Data from Backend</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre> // Display the data from backend
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
