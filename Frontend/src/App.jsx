import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
    </Routes>
  );
};

export default App;
