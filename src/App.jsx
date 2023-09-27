import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function getParam() {
    console.log(window.location.host.split(".")[0]);
  }
  useEffect(() => {
    getParam();
  });
  const param = window.location.host.split(".")[0];
  return (
    <>
      <h1>
        {param == "www" || " " ? (
          <h1>Abheer ki </h1>
        ) : (
          <>
            <h1>{param} ki ma</h1>
          </>
        )}
      </h1>
    </>
  );
}

export default App;
