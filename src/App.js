import Sidebar from "./Components/Sidebar";
import Mainsec from "./Components/Mainsec";
import Player from "./Components/Player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Mainsec />
          <Player />
        </div>
      </div>
    </>
  );
}

export default App;
