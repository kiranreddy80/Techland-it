const config = {
    // Determine the base URL for the backend API
    // In production, this should be your actual live domain (e.g., https://api.techlanditsolutions.com)
    // In development, it defaults to localhost

    API_BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:5000",

    // The relative path for the API endpoints
    API_SUB_PATH: "/api",

    // Public URL for uploaded assets
    get ASSETS_URL() {
        return this.API_BASE_URL;
    }
};

export default config;
