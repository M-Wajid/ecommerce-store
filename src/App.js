import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
