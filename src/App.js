import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register"
import Login from './pages/Login';
import Home from './pages/Home';
import CheckAuth from "./component/CheckAuth.js";
import Goback from "./pages/Goback.jsx";
import { Provider } from 'react-redux';
import { store } from "../src/Redux/store.js";

export default function App() {
  return (
    <Provider store={store}>
    <Router>
    <Routes>
      <Route
        path="/"
        element={
          <CheckAuth>
            <Home />
          </CheckAuth>
        }
      />
      <Route
        path="/goback"
        element={
         
            <Goback />
        
        }
      />
      <Route
        path="/register"
        element={
            <Register />
        }
      />
      <Route
        path="/login"
        element={
            <Login />
        }
      />
  </Routes>
       </Router>
       </Provider>
  );
}