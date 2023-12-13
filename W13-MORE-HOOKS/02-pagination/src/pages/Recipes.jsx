import { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      const data = await response.json();
      console.log("🚀 ~ data:", data);

      setCategories(data.categories);
    };

    fetchData();
  }, []);

  console.log("Cats is", categories);
  return (
    <div>
      {categories.map((item, idx) => (
        <div key={idx}>{item.strCategory}</div>
      ))}
    </div>
  );
}

export default App;
