import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  );
}

export default App;
