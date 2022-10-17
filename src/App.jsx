import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useEffect } from "react";
import axios from "axios";
import Slider from "./components/Slider/Slider";
import Title from "./components/Title/Title";

function App() {
  
  /* A React Hook that is used to set the state of the data. */
  const [data, setData] = useState([]);
  useEffect(() => {
    /* Fetching data from the API and setting it to the state. */
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
     {/* /* Passing the data to the Slider component. */ }
      <Slider data={data} />

      {/* /* Passing the data to the Title component.  */}
      <Title data={data} />
    </div>
  );
}

export default App;
