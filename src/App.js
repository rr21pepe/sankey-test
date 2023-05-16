import "./App.css";
import * as am5 from "@amcharts/amcharts5";

import AmchartsSenkey from "./Amcharts";

function App() {
  return (
    <div className="App">
      {/* <GoogleCharts /> */}
      <AmchartsSenkey
        data={[
          { id: "A", name: "Node A", value: 200, fill: am5.color("#ff621f") },
          { id: "B", name: "Node B", value: 201, fill: am5.color("#297373") },
          { id: "C", name: "Node C", value: 202, fill: am5.color(0xff621f) },
          { id: "D", name: "Node D", value: 203, fill: am5.color(0x946b49) },
          { id: "E", name: "Node E", value: 204, fill: am5.color(0x297373) },
          { id: "G", name: "Node G", value: 205, fill: am5.color(0xff621f) },
          { id: "H", name: "Node H", value: 206, fill: am5.color(0x297373) },
          { id: "I", name: "Node I", value: 207, fill: am5.color(0x946b49) },
          { id: "J", name: "Node J", value: 208, fill: am5.color(0x297373) },
        ]}
        connexions={[
          { from: "A", to: "D", value: 100 },
          { from: "B", to: "D", value: 80 },
          { from: "B", to: "E", value: 40 },
          { from: "C", to: "E", value: 30 },
          { from: "D", to: "G", value: 50 },
          { from: "D", to: "I", value: 20 },
          { from: "D", to: "H", value: 30 },
          { from: "E", to: "H", value: 60 },
          { from: "G", to: "J", value: 50 },
          { from: "I", to: "J", value: 10 },
          { from: "H", to: "J", value: 90 },
        ]}
        callback={(nodeId, nodeValue, coords) => {
          console.log(nodeId, nodeValue, coords);
        }}
      />
      {/* <Plotly /> */}
    </div>
  );
}

export default App;
