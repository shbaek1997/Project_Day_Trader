import './App.css';
import Chart from 'react-apexcharts';

const App = () => {
  const series = [
    {
      name: 'Candlestick',
      type: 'candlestick',
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        }
      ]
    },
    {
      name: 'testing moving average',
      type: 'line',
      data: [
        {
          x: new Date(1538778600000),
          y: [6660.81]
        },
        {
          x: new Date(1538780400000),
          y: [6650.01]
        },
        {
          x: new Date(1538782200000),
          y: [6640.71]
        },
        {
          x: new Date(1538784000000),
          y: [6630.65]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24]
        }
      ]
    }
  ];
  const options = {
    chart: {
      type: 'candlestick',
      height: 400
    },
    title: {
      text: 'CandleStick Chart',
      align: 'center'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: false
      }
    },
    noData: {
      text: 'Loading...'
    }
  };
  return (
    <div id="chart">
      <Chart options={options} series={series} type={'candlestick'} height={350} />
    </div>
  );
};

export default App;
