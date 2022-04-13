import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <div className={"container"}>
      <Navbar />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
