import { useEffect } from "react";

import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className='app'>
      <Header />

      <Main>
        <p>1/15</p>
        <p>Questions?</p>
      </Main>
    </div>
  );
}

export default App;
