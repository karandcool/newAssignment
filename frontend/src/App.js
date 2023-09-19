import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import FormPage from "./FormPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" exact element={<Home />} />
          <Route path="/form" exact element={<FormPage />} />
          <Route path="*" element={<Home />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);