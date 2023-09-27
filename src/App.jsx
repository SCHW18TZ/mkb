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
  if ((window.location.host.split(".")[0] = www)) {
    param = "Abheer";
  } else {
    param = window.location.host.split(".")[0];
  }

  console.log(param);
  return (
    <>
      <h1>{param} ki maa ki c**t</h1>
    </>
  );
}

export default App;
