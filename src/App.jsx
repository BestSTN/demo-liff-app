import HomePage from "./pages/HomePage";

import { useEffect, useState } from "react";
import liff from "@line/liff";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  const [error, setError] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {})
      .catch((e) => {
        setError(`${e}`);
      });
  });

  return (
    <div className="App">
      {error ? (
        <p>
          <code>{error}</code>
        </p>
      ) : (
        <>
          <HomePage />
        </>
      )}
    </div>
  );
}

export default App;
