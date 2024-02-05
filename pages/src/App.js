import logo from "./logo.svg";

import Login from "./component /login";
import Signup from "./component /signup";
import Lists from "./component /lists";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component /navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/lists" element={<Lists></Lists>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
