import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const ChartWrapper = () => {
  
    const chartRef = useRef(null);

    useEffect(() => {
        D3Chart(chartRef.current);
    }, []);

    return (
        <div ref={chartRef}></div>
    );
};

const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 50, RIGHT:10 }
const WIDTH = 1200 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

const D3Chart = element => {

  const svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g").attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

  const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, d => d.height) * .95, 
        d3.max(data, d => d.height)
      ])
      .range([HEIGHT, 0]);

  const x = d3
      .scaleBand()
      .domain(data.map(d => d.name))
      .range([0, WIDTH])
      .padding(0.5);

  const xAxisCall = d3.axisBottom(x)
  svg.append("g").attr("transform", `translate(0, ${HEIGHT})`).call(xAxisCall)

  const yAxisCall = d3.axisLeft(y)
  svg.append("g").call(yAxisCall)

  svg.append("text")
    .attr("x", WIDTH / 2)
    .attr("y", HEIGHT + 50)
    .attr("text-anchor", "middle")
    .text("World's tollest mens")
  
  svg.append("text")
    .attr("x", -HEIGHT / 2)
    .attr("y", -40)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Heyght in cm")
  
  const rects = svg.selectAll("rect").data(data);

  rects
      .enter()
      .append("rect")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", d => HEIGHT - y(d.height))
      .attr("fill", "gray");
};

export default ChartWrapper;

const data = [
    { height: "272", name: "Robert Wadlow" },
    { height: "267", name: "John Rogan" },
    { height: "263.5", name: "John Carroll" },
    { height: "257", name: "Leonid Stadnyk" },
    { height: "251.4", name: "Väinö Myllyrinne" },
];
