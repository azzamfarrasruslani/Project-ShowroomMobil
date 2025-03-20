import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import "./css/styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes />;
    </>
  );
}

export default App;
