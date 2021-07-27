import './Chart.css';
import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts';


const ChartConfig = ({ data }) => {
  // create local state to keep menu hidden
  const [hidden, setHidden] = useState(false);

  // APEXCHART configuration and design
  const colors = ['#502579', '#c4366f', '#85adff'];
  const labels = data.data.map(item => item.label);
  const series = data.data.map(item => item.value);
  const dataLabels = {enabled: false}
  const legend = {
    fontSize: '12px',
    fontFamily: 'Lexend'
  };
  const title = {
    text: data.title,
    align: 'left',
    style: {
      fontSize:  '14px',
      fontWeight:  'bold',
      fontFamily: 'Lexend',
      color:  '#273a44'
    },
  };
  const plotOptions = {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            label: data.totalLabel.toUpperCase(),
            fontSize:  '10px',
            fontFamily: 'Lexend',
          }
        }
      }
    }
  };
  const options = {
    colors,
    dataLabels,
    labels,
    legend,
    plotOptions,
    series,
    title,
  };
 
  // Look into React.cloneElement to clone cards

  return (
    <div className="card flex">
      <div className="donut">
        <Chart options={options} series={series} type="donut" height="200" width="380" />
      </div>
      <div className="dropdown">
        <button className="menu-position">
          <span className="ellipsis">&#8942;</span>
        </button>
        {!hidden && <div onClick={() => setHidden(true)} className="dropdown-content">
          <p>Clone</p>
        </div>}
      </div>
    </div>
  )
}

export default ChartConfig;