# IMDb Clone

A React-based movie discovery app that allows users to search and browse movies using the OMDb API.

## Features

- 🎬 **Popular Movies Display** - Browse trending movies on initial load
- 🔍 **Real-time Search** - Search movies by title with debounced API calls (500ms delay)
- 📱 **Responsive Design** - Mobile-friendly grid layout that adapts to all screen sizes
- ⏱️ **Timer Component** - Built-in hook-based timer with start, pause, and reset functionality
- 🎨 **Modern UI** - Dark gradient theme with smooth transitions and hover effects
- ⚡ **Performance Optimized** - Uses React Hooks (useState, useEffect, useCallback) for efficient state management

## Tech Stack

- **React 18** - UI library with functional components and Hooks
- **OMDb API** - Movie database for fetching movie information
- **CSS3** - Modern styling with gradients, flexbox, and grid layouts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OMDb API Key (free at [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mahirathore24/imdb-clone.git
cd imdb-clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your OMDb API key to the `.env` file:
```
REACT_APP_OMDB_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── api.js              # API service layer for OMDb integration
├── App.js              # Main app component with search functionality
├── App.css             # Main app styling
├── MovieCard.jsx       # Reusable movie card component
├── MovieCard.css       # Movie card styling
├── Timer.jsx           # Hook-based timer component
├── Timer.css           # Timer component styling
└── index.js            # App entry point
```

## API Service

The `api.js` file provides three main functions:

- `searchMovies(query)` - Search movies by title
- `fetchPopularMovies()` - Get popular movies (randomized selection)
- `fetchMovieDetails(imdbID)` - Get detailed information for a specific movie

## Components

### App
Main component that manages:
- Popular movies display on load
- Debounced search functionality
- Loading, error, and empty state handling
- Responsive grid layout

### MovieCard
Displays individual movie information:
- Movie poster with fallback image
- Title, release year, and rating
- Hover effects for better UX

### Timer
Interactive timer component featuring:
- Start, pause, and reset controls
- Time display in HH:MM:SS format
- Disabled state for buttons when appropriate

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
