import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChangePassword from "./pages/ChangePassword";
import CreateEvent from "./pages/CreateEvent";
import CreateStaff from "./pages/CreateStaff";
import DetailsEvent from "./pages/DetailsEvent";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-staff" element={<CreateStaff />} />
        <Route path="/details-event/:id" element={<DetailsEvent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="**" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
