import "./App.css";
import RoutesApplication from "./route";
import AnticipationProvider from "./context/AnticipationContext";

function App() {
  return (
    <div className="App">
      <AnticipationProvider>
        <RoutesApplication />
      </AnticipationProvider>
    </div>
  );
}

export default App;
