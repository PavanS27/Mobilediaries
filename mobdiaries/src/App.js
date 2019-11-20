import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Applets1 from "./components/applets/Applets1";
import Applets2 from "./components/applets/Applets2";

function App() {
  return (
    <div className="App">
      <Header />
      <Applets1 />
      <Applets2 />
      <Footer />
    </div>
  );
}

export default App;
