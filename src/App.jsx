import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import ErrorPage from "./ErrorPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Product from "./components/Product/Product";
import Category from "./pages/Category";
import Admin from "./components/Admin/Admin";

const loaderStyle = {
  color: "rgba(27, 104, 224, 1)",
  margin: "0 auto",
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <div className="loaderDiv">
            <BeatLoader color="#1B68E0" size={30} style={loaderStyle} loading={loading} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/Category" element={<Category/>}/>
            <Route path="/AdminPage" element={<Admin/>}/>
            <Route/>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
