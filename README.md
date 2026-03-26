# Swiggy Project - React Application

A modern food delivery application built with React, inspired by Swiggy. This project demonstrates best practices in React development including hooks, custom hooks, API integration, and responsive UI design.

## Features

- **Restaurant Listing**: Browse through a list of restaurants with real-time data fetching
- **Restaurant Search & Filtering**: Search and filter restaurants by ratings
- **Restaurant Menu**: View detailed menu items for each restaurant
- **Online Status Detection**: Real-time online/offline status monitoring
- **Shimmer UI**: Loading skeleton screens for better UX
- **Responsive Design**: Mobile-friendly interface using modern CSS

## Tech Stack

- **Frontend**: React with Hooks
- **HTTP Client**: Axios
- **Bundler**: Parcel
- **Styling**: CSS

## Project Structure

src/
├── components/
│   ├── About.js              # About page component
│   ├── Contact.js            # Contact page component
│   ├── Error.js              # Error handling component
│   ├── Grocery.js            # Grocery section component
│   ├── HeaderComponent.js    # Navigation header
│   ├── MainContent.js        # Main content wrapper
│   ├── RestaurantMenu.js     # Restaurant menu page
│   ├── RestroCard.js         # Individual restaurant card
│   ├── RestroContainer.js    # Restaurant list container
│   ├── ShimmerUI.js          # Loading shimmer skeleton
│   └── restroData.js         # Mock restaurant data
└── utils/
    ├── constants.js          # API endpoints and constants
    ├── useRestaurents.js     # Custom hook for fetching restaurants
    ├── useRestaurentMenu.js  # Custom hook for restaurant menu
    └── useStatusOnline.js    # Custom hook for online status

## Custom Hooks

### `useRestaurents`

Fetches and manages restaurant data with two-state management:

- `allRestaurants`: Complete unmodified data from API
- `listOfRestaurants`: Filtered data for display

```javascript
const { allRestaurants, listOfRestaurants, setListOfRestaurants, loading } = useRestaurents();
```

### `useRestaurentMenu`

Fetches menu items for a specific restaurant.

### `useStatusOnline`

Tracks online/offline status of the application.

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Key Components

- **RestroContainer**: Displays list of restaurants with search functionality
- **RestroCard**: Individual restaurant card with details
- **RestaurantMenu**: Detailed menu view for selected restaurant
- **ShimmerUI**: Loading placeholder while fetching data
- **HeaderComponent**: Navigation and branding

## State Management

The application uses React's `useState` and `useEffect` hooks for state management combined with custom hooks for data fetching and business logic.

## API Integration

Restaurants data is fetched from the configured API endpoint. The data structure expects:

data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

## Getting Started

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open `http://localhost:8000` in your browser

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request
