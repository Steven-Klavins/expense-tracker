import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
import { v4 as uuidv4 } from "uuid";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={uuidv4()}
        />
      ))}
    </div>
  );
}

export default Chart;
