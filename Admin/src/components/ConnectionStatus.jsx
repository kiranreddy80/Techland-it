import { useState, useEffect } from 'react';
import config from '../config';
import './ConnectionStatus.css';

const ConnectionStatus = () => {
    const [isConnected, setIsConnected] = useState(true);
    const [isChecking, setIsChecking] = useState(false);

    const checkConnection = async () => {
        setIsChecking(true);
        try {
            const response = await fetch(config.API_BASE_URL, {
                method: 'GET',
                mode: 'cors',
            });
            setIsConnected(response.ok);
        } catch (error) {
            setIsConnected(false);
        } finally {
            setIsChecking(false);
        }
    };

    useEffect(() => {
        // Check connection on mount
        checkConnection();

        // Check every 30 seconds
        const interval = setInterval(checkConnection, 30000);

        return () => clearInterval(interval);
    }, []);

    if (isConnected) {
        return null; // Don't show anything when connected
    }

    return (
        <div className="connection-status-banner">
            <div className="connection-status-content">
                <span className="status-icon">⚠️</span>
                <div className="status-message">
                    <strong>Backend Server Disconnected</strong>
                    <p>Cannot connect to {config.API_BASE_URL}. Please start the backend server.</p>
                </div>
                <button
                    onClick={checkConnection}
                    disabled={isChecking}
                    className="retry-button"
                >
                    {isChecking ? 'Checking...' : 'Retry Connection'}
                </button>
            </div>
        </div>
    );
};

export default ConnectionStatus;
