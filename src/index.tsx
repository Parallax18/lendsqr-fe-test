import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Login from "routes/login";
import Dashboard from "routes/dashboard";
import Users from "routes/dashboard/users";
import Error404 from "components/Error404";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <Error404 />
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        errorElement: <Error404 />,
        children: [
            {
                path: 'users',
                element: <Users />
            }
        ]
    }
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App />*/}
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
