import { useContext } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import { PagesContext } from "./components/contexts/pagesContexts";
import Subscriptions from "./components/menu/menu components/subscriptionsFolder/subscriptions";

function App() {
  const {turnMenu, seeChannels} = useContext(PagesContext)

  return (
    
    <div className="App">
      <Header/>
      <div style={{width: '100%', display: 'flex'}}>
        <Menu seeChannels={seeChannels} turnMenu={turnMenu}/>

        <div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
