import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Success from "./pages/Success";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

function Error() {
  return <h1>Page not Found</h1>;
}
