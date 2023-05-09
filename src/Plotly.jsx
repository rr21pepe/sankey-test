import React, { useEffect, useRef } from "react";
import Plot from "react-plotly.js";

export default function Plotly() {
  var data = [
    {
      type: "sankey",
      orientation: "h",
      node: {
        pad: 15,
        thickness: 30,
        line: {
          color: "black",
          width: 0.5,
        },
        label: ["A1", "A2", "B1", "B2", "C1", "C2"],
        color: ["blue", "blue", "blue", "blue", "blue", "blue"],
      },

      link: {
        source: [0, 1, 0, 2, 3, 3],
        target: [2, 3, 3, 4, 4, 5],
        value: [8, 4, 2, 8, 4, 2],
      },
    },
  ];

  const ref = useRef(null);

  useEffect(() => {
    const fn = (ev) => {
      console.log("click!");
      console.log(ev);
    };

    const element = ref;

    element.current.addEventListener("click", fn);

    return () => {
      element.current.removeEventListener("click", fn);
    };
  }, []);

  return (
    <div ref={ref}>
      <Plot
        onSelected={(ev) => {
          console.log("onSelected");
          console.log(ev);
        }}
        onSelecting={(ev) => {
          console.log("onSelecting");
          console.log(ev);
        }}
        onAfterPlot={(a, b) => {
          console.log("onAfterPlot");
          console.log(a, b);
        }}
        onButtonClicked={(ev) => {
          console.log("onButtonClicked");
          console.log(ev);
        }}
        onClickAnnotation={(ev) => {
          console.log("onClickAnnotation");
          console.log(ev);
        }}
        onLegendClick={(ev) => {
          console.log("onLegendClick");
          console.log(ev);
        }}
        onClick={(ev) => {
          console.log("onClick");
          console.log(ev);
        }}
        data={[
          {
            type: "sankey",
            orientation: "h",
            node: {
              pad: 30,
              thickness: 30,
              line: {
                color: "white",
                width: 0.5,
              },
              label: ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "D3"],
              color: ["red", "green", "yellow", "orange", "brown", "purple"],
            },
            link: {
              source: [0, 1, 0, 2, 3, 3, 4, 5, 4],
              target: [2, 3, 3, 4, 4, 5, 6, 7, 6],
              value: [8, 4, 2, 8, 4, 2, 11, 22, 33],
            },
          },
        ]}
        layout={{
          dragmode: "select",
          title: "Basic Sankey",
          font: {
            size: 10,
          },
        }}
      />
    </div>
  );
}
