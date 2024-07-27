import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChangePassword from "./pages/ChangePassword";
import CreateEvent from "./pages/admin/CreateEvent";
import CreateStaff from "./pages/admin/CreateStaff";
import DetailsEvent from "./pages/DetailsEvent";
import Profile from "./pages/Profile";
import Login from "./pages/login";
import Signup from "./pages/signup";
import EditEvent from "./pages/admin/EditEvent";
import ListEvent from "./pages/admin/ListEvent";
import ListStaff from "./pages/admin/ListStaff";
import { routes } from "./constants/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Signup />} />
        <Route path={routes.changePassword} element={<ChangePassword />} />
        <Route path={routes.listEvents} element={<ListEvent />} />
        <Route path={routes.createEvent} element={<CreateEvent />} />
        <Route path={routes.editEvent + '/:id'} element={<EditEvent />} />
        <Route path={routes.createStaff} element={<CreateStaff />} />
        <Route path={routes.listStaffs} element={<ListStaff />} />
        <Route path={routes.detailsEvent + '/:id'} element={<DetailsEvent />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path="**" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
