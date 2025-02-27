# Weather Dashboard

A modern, responsive weather dashboard built with React.js that provides real-time weather information and forecasts. The application features city-based weather search, automatic data refresh, and local storage persistence.

## Features

- Real-time weather data display with 30-second auto-refresh
- City-based weather search
- Current weather conditions including:
  - Temperature
  - Humidity
  - Wind speed
  - Weather conditions with icons
- Error handling for API and network issues
- Local storage for persisting last searched city
- Responsive design for all device sizes
- Temperature unit conversion (Celsius/Fahrenheit)
- 5-day weather forecast

## Technologies Used

- React.js
- Context API for state management
- CSS Modules for styling
- OpenWeatherMap API
- Local Storage API
- React Icons

## Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (get it from [OpenWeatherMap](https://openweathermap.org/api))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

.4 Open http://localhost:5173 to view the application in your browser.

## Project Structure

```
src/
├── components/
│   ├── SearchBar/
│   ├── WeatherDisplay/
│   ├── ErrorMessage/
│   └── ForecastDisplay/
├── context/
│   └── WeatherContext.jsx
├── App.jsx
└── main.jsx
```

## State Management

The application uses React Context API for global state management. The WeatherContext provides:

- Error states
- Last searched city

## API Integration

The application integrates with OpenWeatherMap API using two main endpoints:

- Current weather: `/data/2.5/weather`
- 5-day forecast: `/data/2.5/forecast`

Weather data is automatically refreshed every 30 seconds to ensure up-to-date information.

## Error Handling

The application handles various error scenarios:

- Invalid city names
- Network failures
- API errors

## Local Storage

The application persists:

- Last searched city
