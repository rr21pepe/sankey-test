import React, { useRef, useLayoutEffect } from "react";
import "./App.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";

export default function AmchartsSenkey({ data, connexions }) {
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

    series.nodes.data.setAll(data);
    series.data.setAll(connexions);

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
