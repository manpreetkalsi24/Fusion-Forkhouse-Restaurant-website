import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div style={{ minHeight: "70vh", padding: "40px" }}>
        <h1>Home Page</h1>
        <p>Website under construction</p>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;