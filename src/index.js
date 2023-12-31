import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './components/LandingPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GamesList from './components/GamesList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  }, {
    path: "user/:steamId",
    element: <GamesList />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
