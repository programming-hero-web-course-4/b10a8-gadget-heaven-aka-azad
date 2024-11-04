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
      <div className="font-sora  md:p-0 px-4">
        <NavBar />
        <div className="bg-[#F6F6F6] pb-24">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/:catId" element={<DisplayGadgets />}></Route>
              <Route path="/*" element={<Error />}></Route>
            </Route>
            <Route path="/statistics" element={<Statistics />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/*" element={<Error />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Root;
