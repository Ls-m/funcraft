import './App.css';
import AppRoutes from "./components/app/routes";
import Cookies from "universal-cookie/es6";
export const cookies = new Cookies();
function App() {
  return (
    <div className="App">
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
