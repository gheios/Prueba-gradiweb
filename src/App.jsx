import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useEffect } from "react";
import axios from "axios";
import Slider from "./components/Slider/Slider";
import Title from "./components/Title/Title";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const response = await axios.get(
        "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
      );
      const data = response.data;
      setData(data);
    };
    fetchingData();
  }, []);

  return (
    <div className="app_container">
      <Slider data={data} />
      <Title data={data} />
    </div>
  );
}

export default App;
