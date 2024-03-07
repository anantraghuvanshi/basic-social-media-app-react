import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
