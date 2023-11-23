export default function Product({ product }) {
  const { name, image, price, rating } = product;

  const currency = "Yuan";

  const handleClick = () => console.log("Product added");

  return (
    <div>
      <h3>{name}</h3>
      <img
        style={{ width: "200px", height: "300px", objectFit: "cover" }}
        src={image}
      />
      <p>{currency === "Euro" ? `${price}€` : `${price}$`}</p>
      {rating > 4.5 && rating}
      <p>{rating > 4.5 ? rating : ""}</p>
      <button onClick={() => alert("Product added to your cart")}>
        Add to Cart
      </button>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
