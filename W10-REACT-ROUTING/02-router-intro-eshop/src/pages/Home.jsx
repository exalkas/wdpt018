import { Link } from "react-router-dom";
import { data } from "../data/eshop";

function Home() {
  return (
    <div className=" h-[90vh]">
      {data.map((item) => (
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
