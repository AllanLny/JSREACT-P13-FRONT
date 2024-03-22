import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Components/Home/Home";
import SignIn from './Components/SignIn/SignIn';
import UserPage from './Components/UserPage/UserPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="login" element={<SignIn />} />
  <Route path="user" element={<UserPage />} />
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;