import './App.css';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const App = () => {
  const defaultSeries = {
    name: 'Candlestick',
    type: 'candlestick',
    data: []
  };
  const [series, setSeries] = useState([defaultSeries]);
  const fetchStockData = async () => {
    const APIurl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=${process.env.REACT_APP_API_KEY}`;
    const res = await axios({
      method: 'get',
      url: APIurl,
      responseType: 'json'
    });

    const { data } = res;
    console.log(data);
    const timeSeries = data['Time Series (5min)'];
    const stockData = [];
    Object.entries(timeSeries).forEach((el) => {
      const time = el[0];
      const open = Number(el[1]['1. open']);
      const high = Number(el[1]['2. high']);
      const low = Number(el[1]['3. low']);
      const close = Number(el[1]['4. close']);
      stockData.push({
        x: new Date(time),
        y: [open, high, low, close]
      });
    });
    const newSeries = { ...defaultSeries, data: stockData };
    setSeries([newSeries]);
  };
  useEffect(() => {
    fetchStockData();
  }, []);

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
