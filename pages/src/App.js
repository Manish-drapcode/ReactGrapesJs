import logo from "./logo.svg";

import Login from "./component /login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
