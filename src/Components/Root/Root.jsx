import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Dashboard from "../Dashboard/Dashboard";
import Error from "../Error/Error";
import DisplayGadgets from "../DisplayGadgets/DisplayGadgets";

const Root = () => {
  return (
    <BrowserRouter>
      <div className="font-sora bg-[#F6F6F6] md:p-0 px-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:catId" element={<DisplayGadgets />}></Route>
          </Route>
          <Route path="/statistics" element={<Statistics />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Root;
