import React, { useRef, useLayoutEffect } from "react";
import "./App.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";

export default function AmchartsSenkey({
  data,
  disabledColumns,
  links,
  callback,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    const series = root.container.children.push(
      am5flow.Sankey.new(root, {
        sourceIdField: "from",
        targetIdField: "to",
        valueField: "value",
        paddingRight: 60,
        nodeWidth: 15,
      })
    );

    series.nodes.nodes.template.setAll({
      draggable: false,
    });

    series.nodes.setAll({
      nameField: "name",
    });

    series.nodes.nodes.template.setup = function (node) {
      node.events.on("click", function (e) {
        const dataItem = e.target.dataItem;
        const nodeId = dataItem.dataContext.id;
        const nodeValue = dataItem.dataContext.value;
        const coords = { x: e.point.x, y: e.point.y };

        callback(nodeId, nodeValue, coords);
      });
    };

    series.nodes.rectangles.template.set("templateField", "nodeSettings");
    series.links.template.set("templateField", "linkSettings");

    series.nodes.data.setAll(data);
    series.data.setAll(links);

    series.nodes.nodes.each((node) => {
      if (disabledColumns.includes(node.dataItem.dataContext.columnId)) {
        node.set("opacity", 0);
      }
    });

    return () => {
      root.dispose();
    };
  }, [disabledColumns, data, callback, links]);

  return (
    <div
      ref={ref}
      id="chartdiv"
      style={{ width: "100%", height: "500px" }}
    ></div>
  );
}
