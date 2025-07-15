import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import {Home} from "./Pages/Home.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loading /> : <Home />}
    </>
  );
}

export default App;
