import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
function Home() {
  return (
    <p>Hello world</p>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="**" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
