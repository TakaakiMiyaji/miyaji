import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
  });

  const handleChange = (e) => {
    setState((s) => {
      return {
        ...s,
        [e.target.id]: !s[e.target.id],
      };
    });
  };

  return (
    <div className="root">
      <div className="box-container">
        {state.A ? <div className="ItemA Box">選択肢FF</div> : null}
        {state.B ? <div className="ItemB Box">選択肢B</div> : null}
        {state.C ? <div className="ItemC Box">選択肢C</div> : null}
        {state.D ? <div className="ItemD Box">選択肢D</div> : null}
        {state.E ? <div className="ItemE Box">選択肢E</div> : null}
      </div>
      <div className="checkbox-container">
        <div className="Check">
          <input type="checkbox" name="A" id="A" onChange={handleChange} />
          <label htmlFor="A">選択肢A</label>
        </div>
        <div className="Check">
          <input type="checkbox" name="B" id="B" onChange={handleChange} />
          <label htmlFor="B">選択肢B</label>
        </div>
        <div className="Check">
          <input type="checkbox" name="C" id="C" onChange={handleChange} />
          <label htmlFor="C">選択肢C</label>
        </div>
        <div className="Check">
          <input type="checkbox" name="D" id="D" onChange={handleChange} />
          <label htmlFor="D">選択肢D</label>
        </div>
        <div className="Check">
          <input type="checkbox" name="E" id="E" onChange={handleChange} />
          <label htmlFor="E">選択肢E</label>
        </div>
      </div>
    </div>
  );
}

export default App;
