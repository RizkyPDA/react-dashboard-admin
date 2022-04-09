import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="users">
            <Route index element={<List />}></Route>
            <Route path=":userId" element={<Single />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
