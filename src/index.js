import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />;
      <Footer />
    </div>
  );
}

//how we render the root: render our app in the DOM in react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
