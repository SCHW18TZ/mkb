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
  console.log(param);
  return (
    <>
      <h1>{param} ki mummy randi</h1>
    </>
  );
}

export default App;
