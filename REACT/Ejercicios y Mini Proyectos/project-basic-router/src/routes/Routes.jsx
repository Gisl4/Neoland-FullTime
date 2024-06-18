import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Cocktail, Home } from "../pages";
import Cocktails from "../pages/Cocktails";
import App from "../App";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="cocktails" element={<Cocktails />} />
          <Route path="/cocktail/:idDrink" element={<Cocktail />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main>
                <p>404 - No existe la ruta!</p>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
