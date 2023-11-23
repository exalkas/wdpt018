import "./App.css";
import Navbar from "./components/Navbar";
import { data } from "./dataset";

const today = "Monday";
const smoking = true;
const product = {
  name: "nivea",
  price: 12,
  image:
    "https://images.unsplash.com/photo-1632221522866-bf40bad1db53?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const numbers = [1, 2, 3];

function App() {
  console.log("hello universe");
  if (true) console.log("whateva");
  return (
    <div className="red">
      <Navbar />
      <h1>Welcome to our shop</h1>
      <p>{today}</p>
      {1 + (3 / 6) * 4}
      {smoking}
      {/* {obj} */}
      <p>{numbers}</p>
      <hr />
      <div>
        <h3>{product.name}</h3>
        <img className="nivea" src={product.image} />
      </div>
      <section>
        {data.map((item, idx) => (
          <div key={idx}>
            <h3>{item.name}</h3>
            <img className="nivea" src={item.image} />
            <p>{item.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
