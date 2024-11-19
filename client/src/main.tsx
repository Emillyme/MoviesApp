import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const NotFound = () => <h1>Página não encontrada</h1>;

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '*', element: <NotFound /> }, // Rota para páginas não encontradas
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
