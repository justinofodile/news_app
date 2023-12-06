import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  /*  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((res) => console.log(res));
 */
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getInfo = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <div>
      {data.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  );
}

export default App;
