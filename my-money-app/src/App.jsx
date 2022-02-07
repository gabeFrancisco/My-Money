import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import BillingCycle from "./pages/BillingCycle";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="App-Area">
          <Sidebar />
          <div className="m-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/billingCycle" element={<BillingCycle />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
