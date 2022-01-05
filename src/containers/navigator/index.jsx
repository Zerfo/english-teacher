import { useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "pages/login";
import NotFound from "pages/404";

function Navigator() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Navigator;
