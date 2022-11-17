import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";
import Portfolio from "./pages/portfolio/Portfolio";
function App() {
    const text = {title: "hello", subtitle: "lorem lorem lorem"}
  return (
      <div className="App">
        <AboutUs props={text}/>
        <Portfolio/>
      </div>
  );
}

export default App;
