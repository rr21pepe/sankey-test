import { useState } from "react";
import * as am5 from "@amcharts/amcharts5";

import "./App.css";
import AmchartsSenkey from "./Amcharts";

function App() {
  const [disabledColumns, setDisabledColumns] = useState([]);

  function handleChangeColumnVisibility(id) {
    setDisabledColumns((disabled) =>
      disabled.includes(id)
        ? disabled.filter((columnId) => columnId !== id)
        : [...disabled, id]
    );
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          handleChangeColumnVisibility("column-1");
        }}
      >
        Toggle column 1 visibility
      </button>
      <button
        onClick={() => {
          handleChangeColumnVisibility("column-2");
        }}
      >
        Toggle column 2 visibility
      </button>
      <button
        onClick={() => {
          handleChangeColumnVisibility("column-3");
        }}
      >
        Toggle column 3 visibility
      </button>
      <button
        onClick={() => {
          handleChangeColumnVisibility("column-4");
        }}
      >
        Toggle column 4 visibility
      </button>

      {/* <GoogleCharts /> */}
      <AmchartsSenkey
        disabledColumns={disabledColumns}
        data={[
          {
            id: "A",
            name: "Node A",
            value: 200,
            fill: am5.color("#ff621f"),
            columnId: "column-1",
          },
          {
            id: "B",
            name: "Node B",
            value: 201,
            fill: am5.color("#00FF00"),
            columnId: "column-1",
          },
          {
            id: "C",
            name: "Node C",
            value: 202,
            fill: am5.color(0xff621f),
            columnId: "column-1",
          },
          {
            id: "D",
            name: "Node D",
            value: 203,
            fill: am5.color(0x946b49),
            columnId: "column-2",
          },
          {
            id: "E",
            name: "Node E",
            value: 204,
            fill: am5.color(0x297373),
            columnId: "column-2",
          },
          {
            id: "G",
            name: "Node G",
            value: 205,
            fill: am5.color(0xff621f),
            columnId: "column-3",
          },
          {
            id: "H",
            name: "Node H",
            value: 206,
            fill: am5.color(0x297373),
            columnId: "column-3",
          },
          {
            id: "I",
            name: "Node I",
            value: 207,
            fill: am5.color(0x946b49),
            columnId: "column-3",
          },
          {
            id: "J",
            name: "Node J",
            value: 208,
            fill: am5.color(0x297373),
            columnId: "column-4",
          },
        ]}
        links={[
          { from: "A", to: "D", id: "A0", value: 100 },
          { from: "D", to: "G", id: "A0", value: 50 },
          { from: "G", to: "J", id: "A0", value: 50 },

          { from: "A", to: "D", id: "A1", value: 20 },
          { from: "D", to: "I", id: "A1", value: 20 },
          { from: "I", to: "J", id: "A1", value: 10 },

          { from: "A", to: "D", id: "A2", value: 20 },
          { from: "D", to: "H", id: "A2", value: 30 },
          { from: "H", to: "J", id: "A2", value: 90 },

          { from: "B", to: "D", id: "A3", value: 80 },

          { from: "B", to: "E", id: "A4", value: 40 },
          { from: "E", to: "H", id: "A4", value: 60 },

          { from: "C", to: "E", id: "A5", value: 30 },
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
