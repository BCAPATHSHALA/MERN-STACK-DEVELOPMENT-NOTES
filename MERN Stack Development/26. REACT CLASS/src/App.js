import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./pages/About";
import FreePricing from "./pages/pricing/FreePricing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PremiumPricing from "./pages/pricing/PremiumPricing";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Freemium from "./pages/pricing/Freemium";
import ForPremiumUsers from "./pages/ForPremiumUsers";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div className="App">
      Welcom To App
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/user/:userId/:projectId" element={<Project />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/prime" element={<ForPremiumUsers />} />
        </Route>

        <Route path="/pricing" element={<Pricing />}>
          <Route path="free" element={<FreePricing />} />
          <Route path="premium" element={<PremiumPricing />} />
          <Route path="free-mium" element={<Freemium />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
