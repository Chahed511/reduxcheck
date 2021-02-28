import "./App.css";
import AddTask from "./Component/AddTask/AddTask";
import ListTask from "./Component/ListTask/ListTask";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AddTask />
      <div className="Tasks">
        <ListTask />
      </div>
    <div > <Footer /> 
    </div>


    </div>
  );
}

export default App;
