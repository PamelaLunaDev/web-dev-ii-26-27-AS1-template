
import { StrictMode } from 'react' /* Imports React StrictMode to help identify possible development problems. */

import { createRoot } from 'react-dom/client' /* Imports createRoot to display the React application in the browser. */

import './index.css' /* Imports the general CSS settings for the website. */

import App from './App.jsx' /* Imports the main App component containing the watch.it website. */

/* Displays the App component inside the root element of index.html. */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
