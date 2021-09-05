import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader"

function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])

  return (
    <>
      {loading === false ? (
        <Main />
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;