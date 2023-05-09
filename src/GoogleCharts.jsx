import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["From", "To", "Weight"],
  ["A", "X", 5],
  ["A", "Y", 7],
  ["A", "Z", 6],
  ["B", "X", 2],
  ["B", "Y", 9],
  ["B", "Z", 4],
];

export const options = {};

const chartEvents = [
  {
    callback: ({ chartWrapper, google }) => {
      const chart = chartWrapper.getChart();
      chart.container.addEventListener("click", (ev) => console.log(ev));
    },
    eventName: "ready",
  },
];

export default function GoogleCharts() {
  return (
    <Chart
      chartType="Sankey"
      width="40%"
      height="400px"
      data={data}
      options={{
        sankey: {
          link: {
            color: {
              fill: "#efd", // Color of the link.
              fillOpacity: 0.8, // Transparency of the link.
              stroke: "black", // Color of the link border.
              strokeWidth: 1, // Thickness of the link border (default 0).
            },
            colors: [
              "#a6cee3", // Custom color palette for sankey links.
              "#1f78b4", // Nodes will cycle through this palette
              "#b2df8a", // giving the links for that node the color.
              "#33a02c",
            ],
          },
          node: {
            label: {
              fontName: "Times-Roman",
              fontSize: 12,
              color: "#000",
              bold: true,
              italic: false,
            },
            interactivity: true, // Allows you to select nodes.
            labelPadding: 6, // Horizontal distance between the label and the node.
            nodePadding: 10, // Vertical distance between nodes.
            width: 20, // Thickness of the node.
            colors: [
              "#a6cee3", // Custom color palette for sankey nodes.
              "#1f78b4", // Nodes will cycle through this palette
              "#b2df8a", // giving each node its own color.
              "#33a02c",
            ],
          },
        },
      }}
      onClick={(e) => {
        console.log(e);
      }}
      chartEvents={[
        {
          eventName: "click",
          callback: (a, b) => {
            console.log(a, b);
          },
        },
      ]}
    />
  );
}
