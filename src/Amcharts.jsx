import React, { useRef, useLayoutEffect } from "react";
import "./App.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";

export default function AmchartsSenkey() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    const series = root.container.children.push(
      am5flow.Sankey.new(root, {
        sourceIdField: "from",
        targetIdField: "to",
        valueField: "value",
        paddingRight: 60,
        dataItem: "value",
      })
    );

    series.nodes.nodes.template.setAll({
      draggable: false,
      active: true,
      focusable: true,
    });

    series.nodes.setAll({
      nameField: "name",
      valueField: "value",
      fillField: "fill",
      idField: "id",
      userData: "asdf",
    });

    console.log(series);

    series.nodes.nodes.template.setup = function (node) {
      node.events.on("click", function (e) {
        const dataItem = e.target.dataItem;
        console.log(dataItem.dataContext.value);
        console.log(dataItem);
      });
    };

    series.nodes.rectangles.template.set("templateField", "nodeSettings");
    series.links.template.set("templateField", "linkSettings");

    series.nodes.data.setAll([
      { id: "A", name: "Node A", value: 200, fill: am5.color(0xff621f) },
      { id: "B", name: "Node B", value: 201, fill: am5.color(0x297373) },
      { id: "C", name: "Node C", value: 202, fill: am5.color(0xff621f) },
      { id: "D", name: "Node D", value: 203, fill: am5.color(0x946b49) },
      { id: "E", name: "Node E", value: 204, fill: am5.color(0x297373) },
      { id: "G", name: "Node G", value: 205, fill: am5.color(0xff621f) },
      { id: "H", name: "Node H", value: 206, fill: am5.color(0x297373) },
      { id: "I", name: "Node I", value: 207, fill: am5.color(0x946b49) },
      { id: "J", name: "Node J", value: 208, fill: am5.color(0x297373) },
    ]);
    series.data.setAll([
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
    ]);

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      ref={ref}
      id="chartdiv"
      style={{ width: "100%", height: "500px" }}
    ></div>
  );
}
