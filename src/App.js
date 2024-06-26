import { useContext } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import { PagesContext } from "./components/contexts/pagesContexts";

function App() {
  const {turnMenu} = useContext(PagesContext)

  return (
    
    <div className="App">
      <Header/>
      <div style={{width: '100%', display: 'flex'}}>
        <Menu turnMenu={turnMenu}/>

        <div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
