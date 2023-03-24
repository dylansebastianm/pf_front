import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Nav } from "./Components/Nav/nav"
import { Home } from './Components/Home/Home';
import { CardElement } from "./Components/Card/card"
import { PaginationHome } from './Components/Pagination/pagination';
import UserInfo from './Components/UserInfo/UserInfo2';
import CardDetail from './Components/CardDetail/CardDetail';
import Footer from './Components/Footer/Footer';
import { Favorites } from './Components/Favorites/Favorites';
import Filter from './Components/FilterHome/filterHome'
import { Slider } from "./Components/Slider/Slider";
import Admin from "./Components/Admin/Admin";
import LandingPage from "./Components/LandingPage/LandinPage";


//linea inutil para poder hacer nuevo commit


function App() {

  return (

    <div className="App">

      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        <Routes>
          <Route exact path="/game" element={<CardDetail />} />
        </Routes>

        <Routes>
          <Route exact path="/profile" element={<UserInfo />} />
        </Routes>

        <Routes>
          <Route exact path="/admin" element={<Admin />} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App


