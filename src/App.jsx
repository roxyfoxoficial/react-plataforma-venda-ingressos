import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
        <Route path="**" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
