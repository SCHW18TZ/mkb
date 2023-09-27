import { useEffect } from "react";
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
      <div className="container">
        <h1>
          {param == "www" || "" ? (
            <>
              <h1>Abheer ki maa ki ch*t </h1>

              <button>
                <a
                  className="cta"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  know more about her
                </a>
              </button>
            </>
          ) : (
            <>
              <>
                <h1>{param} ki maa ki ch*t </h1>
                <button>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                  >
                    know more about her
                  </a>
                </button>
              </>
            </>
          )}
        </h1>
      </div>
    </>
  );
}

export default App;
