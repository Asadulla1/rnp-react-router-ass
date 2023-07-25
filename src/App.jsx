import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../src/CSS/style.css";
import IncomePage from "./component/IncomePage";
import ExpensePage from "./component/ExpensePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<IncomePage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
