import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingpage.css";
import Intr from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div className="bodyWrapper">
      {/* Intor */}
      <div className="myBG">
        <NavigationBar />
        <Intr />
      </div>
      {/* End Intro */}

      {/* Trending */}
      <Trending />

      {/* Superhero */}
      <Superhero />
    </div>
  );
}

export default App;
