import { useState } from "react";
import Chapter1to5 from "./components/001~005/Chapter1to5";
import styled from "styled-components";
import Chapter6 from "./components/006/Chapter6";
import './index.css';
const Button = styled.button`
  background-color: "#c9c9c9";
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin: 8px 0;
`;
function App() {
  const [showC1ToC5, setShowC1ToC5] = useState(false);
  const [showC6, setShowC6] = useState(true);
  return (
    <>
      <div>
        <Button onClick={() => setShowC1ToC5(!showC1ToC5)}>
          {showC1ToC5
            ? "hide chapter 1 to 5 content"
            : "show chapter 1 to 5 content"}
        </Button>
        {showC1ToC5 && <Chapter1to5 />}
      </div>
      <div>
        <Button onClick={() => setShowC6(!showC6)}>
          {showC6
            ? "hide chapter 6 content"
            : "show chapter 6 content"}
        </Button>
        {showC6 && <Chapter6 />}
      </div>
    </>
  );
}

export default App;
