import "./App.css";
import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [result, setResult] = useState([[]]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!selectedOption) return; // Prevent empty selections

    setResult((prevResult) => {
      const lastArray = prevResult[prevResult.length - 1];

      if (lastArray.length > 0 && lastArray[0] === selectedOption) {
        // Add to the existing sub-array if it's the same as the last selection
        return [...prevResult.slice(0, -1), [...lastArray, selectedOption]];
      } else {
        // Start a new sub-array if it's a different selection
        return [...prevResult, [selectedOption]];
      }
    });
  };

  return (
    <div className="App">
      <form
        onSubmit={handleOnSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          margin: "20px",
        }}
      >
        <select
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="head">Head</option>
          <option value="tail">Tail</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Result Table:</h2>
        <table
          border="1"
          cellPadding="10"
          style={{ margin: "20px auto", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Group</th>
              <th>Selections</th>
            </tr>
          </thead>
          <tbody>
            {result.map((group, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{group.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
