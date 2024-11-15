import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from './components/Home'
import MeetTheTeam from './components/MeetTheTeam'
import Industry from './components/Industry'
import GetStarted from './components/GetStarted'
import './styles/App.css';
import Login from "./components/Login";
import Accessibility from "./components/Accessibility";
import TermsConditons from "./components/TermsConditons";
import PrivacyPolicy from "./components/PrivacyPolicy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/meet-us",
    element: <MeetTheTeam />,
  },
  {
    path: "/industry",
    element: <Industry />,
  },
  {
    path: "/get-started",
    element: <GetStarted />,
  },
  {
    path: "/login",
    element: <Login />,
  },


]);

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meet-us" element={<MeetTheTeam />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/terms-and-conditions" element={<TermsConditons />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
