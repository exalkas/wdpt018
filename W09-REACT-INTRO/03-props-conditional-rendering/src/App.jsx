import "./App.css";
import Navbar from "./components/Navbar";
import { data } from "./dataset";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Navbar />
      {data.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
}

export default App;
