import React, { useRef, useLayoutEffect, useEffect } from "react";
import "./App.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5flow from "@amcharts/amcharts5/flow";

export default function AmchartsSenkey() {
  const ref = useRef(null);

  // useEffect(() => {
  //   const element = ref.current;

  //   function fn(ev) {
  //     console.log("click!");
  //     console.log(ev);
  //   }

  //   element.addEventListener("click", fn);

  //   return () => {
  //     element.removeEventListener("click", fn);
  //   };
  // }, []);

  useLayoutEffect(() => {
    // let root = am5.Root.new("chartdiv");

    // // ...

    // root.current = root;

    // let series = root.container.children.push(
    //   am5flow.Sankey.new(root, {
    //     forceInactive: false,
    //     sourceIdField: "from",
    //     targetIdField: "to",
    //     valueField: "value",
    //     nodeWidth: 20,
    //   })
    // );

    // series.nodes.data.setAll([
    //   { from: "A", to: "B", value: 27 },
    //   { from: "B", to: "C", value: 8 },
    //   { from: "C", to: "D", value: 4 },
    //   { from: "C", to: "E", value: 3 },
    //   { from: "D", to: "G", value: 5 },
    //   { from: "D", to: "I", value: 2 },
    //   { from: "D", to: "H", value: 3 },
    //   { from: "E", to: "H", value: 6 },
    //   { from: "G", to: "J", value: 5 },
    //   { from: "I", to: "J", value: 1 },
    //   { from: "H", to: "J", value: 9 },
    // ]);

    // Set data
    // series.data.setAll([
    //   { from: "A", to: "B", value: 10 },
    //   { from: "B", to: "C", value: 8 },
    //   { from: "C", to: "D", value: 4 },
    //   { from: "C", to: "E", value: 3 },
    //   { from: "D", to: "G", value: 5 },
    //   { from: "D", to: "I", value: 2 },
    //   { from: "D", to: "H", value: 3 },
    //   { from: "E", to: "H", value: 6 },
    //   { from: "G", to: "J", value: 5 },
    //   { from: "I", to: "J", value: 1 },
    //   { from: "H", to: "J", value: 9 },
    // ]);

    // series.nodes.rectangles.template.setAll({
    //   forceInactive: false,
    //   fillOpacity: 0.5,
    //   stroke: am5.color(0x000000),
    //   strokeWidth: 1,
    //   cornerRadiusTL: 4,
    //   cornerRadiusTR: 4,
    //   cornerRadiusBL: 4,
    //   cornerRadiusBR: 4,
    // });

    // series.nodes.nodes.template.setAll({
    //   draggable: false,
    // });

    // series.nodes.events.enableType("click");
    // series.nodes.nodes.events.enableType("click");

    // series.nodes.labels.template.setAll({
    //   x: am5.percent(50),
    //   centerX: am5.percent(50),
    //   textAlign: "center",
    // });

    // series.nodes.nodes.events.on("click", (ev) => {
    //   console.log("please");
    //   console.log(ev);
    // });

    // console.log({ series });

    // series.nodes.events.on("click", (ev) => {
    //   console.log(ev.target.data);
    //   console.log(ev.target.dataItem);
    // });

    // series.events.on("click", (ev) => {
    //   console.log(ev);
    //   console.log("Clicked on a column", ev.target.uid);
    //   // data item
    //   console.log(ev.target?.dataItem);
    //   // your original data object
    //   console.log(ev.target.dataItem?.dataContext);
    //   // series
    //   console.log(ev.target.dataItem?.component);
    // });

    const root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    // root.setThemes([
    //   am5themes_Animated.new(root)
    // ]);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/flow-charts/
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

    // series.events.on(
    //   "click",
    //   function (ev) {
    //     console.log(ev);
    //     console.log("Clicked on a column", ev.target.uid);
    //     // data item
    //     console.log(ev.target?.dataItem);
    //     // your original data object
    //     console.log(ev.target.dataItem?.dataContext);
    //     // series
    //     console.log(ev.target.dataItem?.component);
    //   },
    //   this
    // );

    // Set data
    // https://www.amcharts.com/docs/v5/charts/flow-charts/#Setting_data
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

    // Make stuff animate on load
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
