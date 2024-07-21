import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthform from "./pages/userAuthForm.page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/signin" element={<UserAuthform type="sign-in" />} />
          <Route path="/signup" element={<UserAuthform type="sign-up" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
