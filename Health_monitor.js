    document.addEventListener("DOMContentLoaded", () => {
    // Simulate real-time data updates
    function updateHealthData() {
        document.getElementById("heart-rate").textContent = `${Math.floor(Math.random() * 30 + 60)} bpm`;
        document.getElementById("blood-pressure").textContent = `${Math.floor(Math.random() * 20 + 110)}/${Math.floor(Math.random() * 10 + 70)} mmHg`;
        document.getElementById("oxygen-levels").textContent = `${Math.floor(Math.random() * 5 + 95)}%`;
        document.getElementById("temperature").textContent = `${(Math.random() * 2 + 36).toFixed(1)} °C`;
        document.getElementById("glucose").textContent = `${Math.floor(Math.random() * 50 + 70)} mg/dL`;
    }

    // Update health data every 4 seconds
    setInterval(updateHealthData, 4000);

    // SOS button interaction
    document.getElementById("sos-button").addEventListener("click", () => {
        const currentTime = new Date().toLocaleTimeString();
        document.getElementById("last-alert").textContent = `Last alert: SOS alert sent at ${currentTime}`;
        alert("SOS alert sent!");
    });

    // Simulate location update
    function updateLocation() {
        const locations = [
            "123 Maninagar",
            "456 Vastrapur",
            "789 Thaltej",
            "789 Sindhu Bhavan",
            "231 Gota",
            "546 Iscon",
            "687 Bopal",
            "890 Prahlad Nagar",
        ];
        document.getElementById("current-location").textContent = locations[Math.floor(Math.random() * locations.length)];
    }

    // Update location every 2 seconds
    setInterval(updateLocation, 2000);
});
