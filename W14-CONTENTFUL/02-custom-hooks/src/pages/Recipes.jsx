import "../App.css";
import useFetch from "../hooks/useFetch";

function App() {
  const { data } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  return (
    <div>
      {data?.categories?.map((item, idx) => (
        <div key={idx}>{item.strCategory}</div>
      ))}
    </div>
  );
}

export default App;
