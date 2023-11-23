import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data/eshop";

export default function ProductDetails() {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("🚀 ~ demo:", id);

  const product = data.find((item) => item.id == id);
  console.log("🚀 ~ product:", product);

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} />
      <br />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
