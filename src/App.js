import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Korzinka from "./containers/Korzinka/Korzinka";
import NotFound from "./containers/NotFound/NotFound";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const interval = useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1500);

    clearInterval(interval);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PacmanLoader color="#151577" loading={true} size={150} />
        </div>
      ) : (
        <main className="main">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/korzinka" element={<Korzinka />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      )}
    </div>
  );
}

export default App;
