import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();

    // Example user data, you can replace this with actual data from your backend
    const user = {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        balance: 500.00,
    };

    const handleLogout = () => {
        // Implement your logout logic, like clearing tokens or session data
        history.push('/login');  // Redirect to login page after logout
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome, {user.username}!</h1>
            <div className="user-info">
                <p>Email: {user.email}</p>
                <p>Account Balance: ${user.balance}</p>
            </div>
            <div className="dashboard-links">
                <button onClick={() => history.push('/account-settings')}>Account Settings</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
