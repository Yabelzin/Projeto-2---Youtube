import Header from "./components/header/header";
import Menu from "./components/menu/menu";

function App() {
  return (
    
    <div className="App">
      <Header/>
      <div style={{width: '100%', display: 'flex'}}>
        <Menu/>

        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
