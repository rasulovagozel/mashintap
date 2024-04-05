import React from 'react'
import { routers } from '../Routers.jsx'
import { RouterProvider } from 'react-router-dom'
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/global.scss";
const App = () => {
  return (
    <RouterProvider router={routers} />
  )
}

export default App