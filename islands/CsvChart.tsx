import * as chartjs from "https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js";
import { useEffect } from "preact/hooks";
import styles  from '../utils/styles.ts';

 export default function Chart(props: { data: [string, number[]][] }) {
  useEffect(() => {
    // Takes the data processed from a .csv file and saves it to variables so that it can be used to create charts
    let x, rss, committed, heapTotal, heapUsed, external: number[] = [];
    for(let i = 0; i < props.data.length; i++){
      switch(props.data[i][0]){
        case 'x': x = props.data[i][1]; break;
        case 'rss': rss = props.data[i][1]; break;
        case 'committed': committed = props.data[i][1]; break;
        case 'heapTotal': heapTotal = props.data[i][1]; break;
        case 'heapUsed': heapUsed = props.data[i][1]; break;
        case 'external': external = props.data[i][1]; break;
        default: 
          // If this isn't a denosoar csv file, it will not be parsed. 
          throw new Error('Please check your csv columns. Your columns must be named x, rss, commmitted, heapTotal, heapUsed, and external.')
      }
    }
    // Create the charts by invoking styles to add data sets to a set of pre-existing chart.js styles
    const { chartStyle, chartOptions } = styles(x, rss, committed, heapTotal, heapUsed, external);
    const ctx1 = document.getElementById("myCsvChart");
    const lineChart = new chartjs.Chart(ctx1, {
      type: "line",
      data: chartStyle,
      options: chartOptions,
    });
    // Destroy the chart when the island refreshes
    return () => {
      lineChart.destroy();
    }
  }, [props.data]);

  return (
    <div id = "csv" class='w-4/5 mx-auto min-w-800 max-w-6xl pt-10 pb-10'>
      <div id="line" class="border-2 border-solid border-gray-300 p-4 ">
          <canvas id="myCsvChart"></canvas>
      </div>
    </div>
  )
}
