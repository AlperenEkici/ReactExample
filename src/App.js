import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Demo from "./Create";
import Navbar from "./Navbar";
import BlogsDetail from "./BlogsDetail";
import NotFound from "./NotFound";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/demo" element={<Demo />} />
          <Route  path="/blogs/:id" element={<BlogsDetail />} />
          <Route  path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
