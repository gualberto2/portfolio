import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/HomeP";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useState } from "react";

import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Article from "./pages/Article";
import Post from "./components/Post";
import { Toaster } from "react-hot-toast";

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
      <Toaster />
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
            path="/projects"
            element={<Projects />}
            onStart={showLoadingIndicator}
            onEnd={hideLoadingIndicator}
          />
          {/* <Route
            path="/post/:slug"
            element={<Post />}
            onStart={showLoadingIndicator}
            onEnd={hideLoadingIndicator}
          /> */}
          <Route
            path="/article/:slug"
            element={<Article />}
            onStart={showLoadingIndicator}
            onEnd={hideLoadingIndicator}
          />
          <Route
            path="/contact"
            element={<Contact />}
            onStart={showLoadingIndicator}
            onEnd={hideLoadingIndicator}
          />

          <Route
            path="/resume"
            element={<Resume />}
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
