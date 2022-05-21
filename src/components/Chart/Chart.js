import React from "react";
import "./Chart.css";
import ChartBar from './ChartBar'
//
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => {
    return dataPoint.value
  }
  )
  const maxDataPoint = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((point) => {
        <ChartBar
          value={point.value}
          label={point.label}
          key={point.label}
          maxValue={maxDataPoint}
        />;
      })}
    </div>
  );
};

export default Chart;
