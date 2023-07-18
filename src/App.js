import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/HomeP";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useState } from "react";
import Work from "./pages/Work";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const showLoadingIndicator = () => {
    setIsLoading(true);
  };

  const hideLoadingIndicator = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
            onStart={showLoadingIndicator}
            onEnd={hideLoadingIndicator}
          />
          <Route
            path="/about"
            element={<About />}
            onStart={showLoadingIndicator}
            onEnd={hideLoadingIndicator}
          />
          <Route
            path="/work"
            element={<Work />}
            onStart={showLoadingIndicator}
            onEnd={hideLoadingIndicator}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
