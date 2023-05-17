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
            disabled: true,
            columnId: "column-1",
          },
          {
            id: "B",
            name: "Node B",
            value: 201,
            fill: am5.color("#00FF00"),
            disabled: true,
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
