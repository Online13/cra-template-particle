import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout/BasicLayout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

/**
 * define all of the route of our app. 
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route element={<BasicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};