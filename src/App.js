import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import You from "./pages/library/you";
import History from "./pages/history";
import Playlists from "./pages/library/playlists";
import { useContext } from "react";
import { PagesContext, PagesContextStore } from "./components/contexts/pagesContexts";
import { UserStorage } from "./components/contexts/userContext";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { CategoryProvider } from "./components/contexts/categoriesContext";

function App() {

  const {turnMenu, setTurnMenu} = useContext(PagesContext)

  return (
    <UserStorage>
    <PagesContextStore>
    <CategoryProvider>
      <BrowserRouter>
        <div className="App">
                <Routes>
                  <Route path="/" element={<Home turnMenu={turnMenu}/>}/>
                  <Route path="/feed/you" element={<You turnMenu={turnMenu}/>}/>
                  <Route path="/feed/history" element={<History turnMenu={turnMenu}/>}/>
                  <Route path="/feed/playlists" element={<Playlists turnMenu={turnMenu}/>}/>
                  <Route path="/user/login" element={<Login/>}/>
                  <Route path="/user/signup" element={<Register/>}/>
                </Routes>
          </div>
      </BrowserRouter>
    </CategoryProvider>
    </PagesContextStore>
    </UserStorage>
  );
}

export default App;
