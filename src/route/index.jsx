import { Route, Routes } from "react-router-dom";
import AdvanceValue from "../components/AdvanceValue";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<AdvanceValue />} />
    </Routes>
  );
};

export default RoutesApplication;
